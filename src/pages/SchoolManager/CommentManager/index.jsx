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
    }

    // 关闭增加学科对话框
    cancelAdd = () => {
        this.setState({ addComment: false })
    }

    // 点击增加学科对话框按钮
    addOk = () => {
        // console.log(11111111)
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const { username, password } = values
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='indexBox'>
                <div className='commentManagerSearvh'>
                    <Form layout='inline'>
                        <Form.Item label="学科名称" >
                            {getFieldDecorator('subjectName', {
                                rules: [
                                ],
                            })(<Input placeholder="请输入您的账户" />)}
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
                            <Form.Item label="学科名称" {...formItemLayout}>
                                {getFieldDecorator('subjectName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入您的学科名称',
                                        },
                                    ],
                                })(<Input placeholder="请输入您的学科名称" />)}
                            </Form.Item>
                            <Form.Item label="小红花数" {...formItemLayout} >
                                {getFieldDecorator('flowerNum', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入您的小红花数',
                                        },
                                    ],
                                })(<Input placeholder="请输入您的小红花数" />)}
                            </Form.Item>
                            <Form.Item label="学科评语" {...formItemLayout} >
                                {getFieldDecorator('subjectComment', {
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
                    this.state.formModal ?
                        <Modal
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
                                <Form.Item label="学科名称" {...formItemLayout}>
                                    {getFieldDecorator('subjectName', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入您的学科名称',
                                            },
                                        ],
                                    })(<Input placeholder="请输入您的学科名称" />)}
                                </Form.Item>
                                <Form.Item label="小红花数" {...formItemLayout} >
                                    {getFieldDecorator('flowerNum', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入您的小红花数',
                                            },
                                        ],
                                    })(<Input placeholder="请输入您的小红花数" />)}
                                </Form.Item>
                                <Form.Item label="学科评语" {...formItemLayout} >
                                    {getFieldDecorator('subjectComment', {
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
                }
            </div>
        )
    }
}
const commentManager = Form.create({ name: 'commentManager' })(index);
const CommentManagerIndex = (state) => {
    return ({
        ...state
    })
}
export default connect(CommentManagerIndex)(commentManager)