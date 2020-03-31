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
import style from './index.less'

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
        addComment: false,
        schoolStatus: null,
        addGradeVisible:false
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
        console.log(v, n)

        setTimeout(() => {
            this.props.form.setFieldsValue({
                className: n.subjectName,
                status: n.createTime,
                inSchoolTime: n.subjectIcon
            })
        }, 0)

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
        setTimeout(() => {
            this.props.form.setFieldsValue({
                status: '',
                className: '',
                inSchoolTime: ''
            })
        }, 0)

        this.setState({
            visible: false,
        });
    };

    // 增加学科
    addCommentBtn = () => {
        this.setState({ addComment: true })
    }

    // 关闭增加学科对话框
    cancelAdd = () => {
        this.setState({ addComment: false })
        this.props.form.resetFields()
    }

    // 点击增加学科对话框按钮
    addOk = () => {
        console.log(this.props)
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    onChange = (value) => {
        console.log(`selected ${value}`);
        this.setState({ schoolStatus: value })
    }


    onBlur = () => {
        console.log('blur');
        // console.log(this.state.schoolStatus)

    }

    onFocus = () => {
        console.log('focus');
    }

    onSearch = () => {
        console.log('search:', val);
    }

    addGrade = () => {
        this.setState({
            addGradeVisible: true
        })
    }

    addGradeOk = () => {

    }

    addGradeCancel = () => {
        this.setState({
            addGradeVisible: false
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='indexBox'>
                <div className='commentManagerSearvh'>
                    <Form layout='inline'>
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
                                    Select.Option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Select.Option value="inSchool">在校</Select.Option>
                                <Select.Option value="outSchool">离校</Select.Option>
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
                        <Form>
                            <Form.Item label="入学年份" {...formItemLayout}>
                                {getFieldDecorator('inSchoolTime', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入您的学科名称',
                                        },
                                    ],
                                })(<Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                    onChange={() => this.onChange}
                                    onFocus={this.onFocus}
                                    onBlur={this.onBlur}
                                    onSearch={this.onSearch}
                                    filterOption={(input, option) =>
                                        Select.Option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Select.Option value="inSchool">在校</Select.Option>
                                    <Select.Option value="outSchool">离校</Select.Option>
                                </Select>)}
                            </Form.Item>
                            <Form.Item label="年纪简称" {...formItemLayout}>
                                {getFieldDecorator('className', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入您的学科名称',
                                        },
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
                                        Select.Option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Select.Option value="inSchool">在校</Select.Option>
                                    <Select.Option value="outSchool">离校</Select.Option>
                                </Select>)}
                            </Form.Item>
                            <Form.Item label="状态" {...formItemLayout}>
                                {getFieldDecorator('status', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入您的学科名称',
                                        },
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
                                        Select.Option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Select.Option value="inSchool">在校</Select.Option>
                                    <Select.Option value="outSchool">离校</Select.Option>
                                </Select>)}
                            </Form.Item>
                        </Form>
                    </Modal>

                    <Button type='primary' style={{ marginLeft: '10px' }} onClick={this.addGrade}>升年级</Button>
                    <Modal
                        title="提示"
                        visible={this.state.addGradeVisible}
                        onOk={this.addGradeOk}
                        onCancel={this.addGradeCancel}
                    >
                        您确定为该年级进行升年级吗？
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
                        您确定删除该年级吗？
                        </Modal> : <Modal
                            title="编辑"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancelUpLoad}
                        >
                            <Form>
                                <Form.Item label="入学年份" {...formItemLayout}>
                                    {getFieldDecorator('inSchoolTime', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入您的学科名称',
                                            },
                                        ],
                                    })(<Select
                                        showSearch
                                        style={{ width: 200 }}
                                        placeholder="Select a person"
                                        optionFilterProp="children"
                                        onChange={() => this.onChange}
                                        onFocus={this.onFocus}
                                        onBlur={this.onBlur}
                                        onSearch={this.onSearch}
                                        filterOption={(input, option) =>
                                            Select.Option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Select.Option value="inSchool">在校</Select.Option>
                                        <Select.Option value="outSchool">离校</Select.Option>
                                    </Select>)}
                                </Form.Item>
                                <Form.Item label="年纪简称" {...formItemLayout}>
                                    {getFieldDecorator('className', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入您的学科名称',
                                            },
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
                                            Select.Option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Select.Option value="inSchool">在校</Select.Option>
                                        <Select.Option value="outSchool">离校</Select.Option>
                                    </Select>)}
                                </Form.Item>
                                <Form.Item label="状态" {...formItemLayout}>
                                    {getFieldDecorator('status', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入您的学科名称',
                                            },
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
                                            Select.Option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Select.Option value="inSchool">在校</Select.Option>
                                        <Select.Option value="outSchool">离校</Select.Option>
                                    </Select>)}
                                </Form.Item>
                            </Form>
                            {/* <Form >
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
                            </Form> */}
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
const gradeManager = Form.create({ name: 'gradeManager' })(index);
const GradaManagerIndex = (state) => {
    return ({
        ...state
    })
}
export default connect(GradaManagerIndex)(gradeManager)