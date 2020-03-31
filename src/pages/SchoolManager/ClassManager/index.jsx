// import React, { Component } from 'react'

// export default class index extends Component {
//     render() {
//         return (
//             <div>
//                 年级管理
//             </div>
//         )
//     }
// }

import React, { Component } from 'react'
import { Form, Button, Select, Input, Modal, Table } from 'antd'
import { connect } from 'dva'
// import style from './index.less'

const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 },
};

class index extends Component {

    state = {
        visible: false,
        formModal: false,
        prop: {
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            listType: 'picture',
            // defaultFileList: [...fileList],
        },
        addComment: false
    };

    componentDidMount() {
        this.props.dispatch({
            type: 'subjectManager/getSubjectManagerListApi',
            payload: {
                OperationsFun: this.OperationsFun,
                otherOperationsFun: this.otherOperationsFun
            }
        })
    }

    OperationsFun = (v, n) => {
        this.setState({
            visible: true,
            formModal: false
        });
        console.log(v,n)
        this.props.form.setFieldsValue({
            order:1,
            headmaster:n.subjectName,
            class:n.createTime,
            grade:n.subjectIcon
        })
    }

    otherOperationsFun = (v, n) => {
        console.log(v, n)
        this.setState({
            formModal: true,
            visible: true
        });
    }

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancelUpLoad = e => {
        console.log(this.props.form);
        this.props.form.setFieldsValue({
            subjectIcon: '',
            order: '',
            subjectName: ''
        })
        this.setState({
            visible: false,
        });
    };

    // 增加学科
    addCommentBtn = () => {
        this.setState({ addComment: true })
        this.props.form.setFieldsValue({
            order:'',
            headmaster: '',
            class:'',
            grade: ''
        })
    }

    // 关闭增加学科对话框
    cancelAdd = () => {
        this.setState({ addComment: false })
        this.props.form.resetFields()
    }

    // 点击增加学科对话框按钮
    addOk = () => {
        // console.log(11111111)
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    onChange = (value) => {
        console.log(`selected ${value}`);
    }

    onBlur = () => {
        console.log('blur');
    }

    onFocus = () => {
        console.log('focus');
    }

    onSearch = () => {
        console.log('search:', val);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='indexBox'>
                <div className='commentManagerSearvh'>
                    <Form layout='inline'>
                        <Form.Item label="所属年纪" >
                            {getFieldDecorator('gradeName', {
                                rules: [
                                ],
                            })(<Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Select a person"
                                optionFilterProp="children"
                                onChange={this.onChange}
                                onFocus={this.onFocus}
                                onBlur={this.onBlur}
                                onSearch={this.onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>)}
                        </Form.Item>
                        <Form.Item label="状态" >
                            {getFieldDecorator('status', {
                                rules: [
                                ],
                            })(<Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Select a person"
                                optionFilterProp="children"
                                onChange={this.onChange}
                                onFocus={this.onFocus}
                                onBlur={this.onBlur}
                                onSearch={this.onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>)}
                        </Form.Item>
                    </Form>
                    <div>
                        <Button type='primary'>查询</Button>
                        <Button>重置</Button>
                    </div>
                </div>

                <div className='addBtn'>
                    <Button type='danger' onClick={this.addCommentBtn}>新增</Button>
                    <Modal
                        title="新增"
                        visible={this.state.addComment}
                        onOk={this.addOk}
                        onCancel={this.cancelAdd}
                    >
                        <Form >
                            <Form.Item label="序号" {...formItemLayout}>
                                {getFieldDecorator('order', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入您的学科名称',
                                        },
                                    ],
                                })(<Input placeholder="请输入您的学科名称" />)}
                            </Form.Item>
                            <Form.Item label="所属年纪" {...formItemLayout} >
                                {getFieldDecorator('grade', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入您的小红花数',
                                        },
                                    ],
                                })(<Input placeholder="请输入您的小红花数" />)}
                            </Form.Item>
                            <Form.Item label="班级名称" {...formItemLayout} >
                                {getFieldDecorator('class', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入您的账号',
                                        },
                                    ],
                                })(<Input placeholder="请输入您的账户" />)}
                            </Form.Item>
                            <Form.Item label="班主任" {...formItemLayout} >
                                {getFieldDecorator('headmaster', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入您的账号',
                                        },
                                    ],
                                })(<Input placeholder="请输入您的账户" />)}
                            </Form.Item>
                        </Form>
                    </Modal>
                </div>

                <Table
                    columns={this.props.subjectManager.columns}
                    pagination={{ defaultPageSize: 4 }}
                    dataSource={this.props.subjectManager.data}
                />

                {
                    this.state.formModal ? <Modal
                        title="提示"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        您确定删除该评语吗？
                        </Modal> : <Modal
                            title="编辑"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancelUpLoad}
                        >
                            <Form >
                                <Form.Item label="序号" {...formItemLayout}>
                                    {getFieldDecorator('order', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入您的学科名称',
                                            },
                                        ],
                                    })(<Input placeholder="请输入您的学科名称" />)}
                                </Form.Item>
                                <Form.Item label="所属年纪" {...formItemLayout} >
                                    {getFieldDecorator('grade', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入您的小红花数',
                                            },
                                        ],
                                    })(<Input placeholder="请输入您的小红花数" />)}
                                </Form.Item>
                                <Form.Item label="班级名称" {...formItemLayout} >
                                    {getFieldDecorator('class', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入您的账号',
                                            },
                                        ],
                                    })(<Input placeholder="请输入您的账户" />)}
                                </Form.Item>
                                <Form.Item label="班主任" {...formItemLayout} >
                                    {getFieldDecorator('headmaster', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入您的账号',
                                            },
                                        ],
                                    })(<Input placeholder="请输入您的账户" />)}
                                </Form.Item>
                            </Form>
                        </Modal>
                    // <Modal
                    //     title="编辑"
                    //     visible={this.state.visible}
                    //     onOk={this.handleOk}
                    //     onCancel={this.handleCancelUpLoad}
                    // >
                    //     <Form >
                    //         <Form.Item label="学科名称" {...formItemLayout}>
                    //             {getFieldDecorator('subjectName', {
                    //                 rules: [
                    //                     {
                    //                         required: true,
                    //                         message: '请输入您的学科名称',
                    //                     },
                    //                 ],
                    //             })(<Input placeholder="请输入您的学科名称" />)}
                    //         </Form.Item>
                    //         <Form.Item label="小红花数" {...formItemLayout} >
                    //             {getFieldDecorator('flowerNum', {
                    //                 rules: [
                    //                     {
                    //                         required: true,
                    //                         message: '请输入您的小红花数',
                    //                     },
                    //                 ],
                    //             })(<Input placeholder="请输入您的小红花数" />)}
                    //         </Form.Item>
                    //         <Form.Item label="学科评语" {...formItemLayout} >
                    //             {getFieldDecorator('subjectComment', {
                    //                 rules: [
                    //                     {
                    //                         required: true,
                    //                         message: '请输入您的账号',
                    //                     },
                    //                 ],
                    //             })(<Input placeholder="请输入您的账户" />)}
                    //         </Form.Item>
                    //     </Form>
                    // </Modal>
                }
            </div>
        )
    }
}
const classManager = Form.create({ name: 'classManager' })(index);
const ClassManagerIndex = (state) => {
    return ({
        ...state
    })
}
export default connect(ClassManagerIndex)(classManager)