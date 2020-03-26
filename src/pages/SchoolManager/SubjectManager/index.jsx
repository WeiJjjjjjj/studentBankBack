import React, { Component } from 'react'
// import Table from '../../../components/Table/index'
import { Table, Modal, Form, Input, Upload, Button } from 'antd'
import { connect } from 'dva'
import style from './index.less'
import { UploadOutlined } from '@ant-design/icons';

const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
};

class index extends Component {

    otherOperationsFun = () => {

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

    componentDidMount() {
        this.props.dispatch({
            type: 'subjectManager/getSubjectManagerListApi',
            payload: {
                OperationsFun: this.OperationsFun,
                otherOperationsFun: this.otherOperationsFun
            }
        })
    }

    state = {
        visible: false,
        formModal: false,
        prop:{
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            listType: 'picture',
            // defaultFileList: [...fileList],
          }
    };

    // showModal = () => {
    //     this.setState({
    //         visible: true,
    //     });
    // };

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


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='indexBox'>
                <Button type='primary'>新增</Button>
                <Table
                    columns={this.props.subjectManager.columns}
                    pagination={{ defaultPageSize: 2 }}
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
                            您确定删除该学科吗？
                        </Modal> : <Modal
                            title="编辑"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancelUpLoad}
                        >
                            <Form>
                                <Form.Item {...formItemLayout} label="序号" >
                                    {getFieldDecorator('order', {
                                        rules: [
                                            {
                                                required: true,
                                                // message: '请输入您的账号',
                                            },
                                        ],
                                    })(<Input placeholder="请输入您的账户" />)}
                                </Form.Item>
                                <Form.Item {...formItemLayout} label="学科名称" >
                                    {getFieldDecorator('subjectName', {
                                        rules: [
                                            {
                                                required: true,
                                                // message: '请输入您的账号',
                                            },
                                        ],
                                    })(<Input placeholder="请输入您的账户" />)}
                                </Form.Item>
                                <Form.Item {...formItemLayout} label="学科名称" >
                                    {getFieldDecorator('subjectIcon', {
                                        // rules: [
                                        //     {
                                        //         required: true,
                                        //         // message: '请输入您的账号',
                                        //     },
                                        // ],
                                    })(
                                        <div>
                                            <Upload {...this.state.prop}>
                                                <Button>
                                                    <UploadOutlined /> Upload
                                                </Button>
                                            </Upload>
                                        </div>
                                    )}
                                </Form.Item>
                            </Form>
                        </Modal>
                }

            </div>
        )
    }
}

const subject = (state) => {
    return ({
        ...state
    })
}

const subjectManager = Form.create({ name: 'subjectManager' })(index);

export default connect(subject)(subjectManager)