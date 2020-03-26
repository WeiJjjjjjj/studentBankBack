import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import React, { Component } from 'react'
import { Select } from 'antd';
import style from './index.less'
// import Table from '../../../components/Table'
import PageHeaderTittle from '../../../components/PageHeaderTittle/index'
import { connect } from 'dva'
import Modal from '../../../components/Modal/index'
import AddNewUser from './AddNewUser'
import Pubsub from 'pubsub-js'
import {Table} from 'antd'

class UserDetails extends Component {

    state = {
        details: true,
        tit: false
    }

    details = () => {
        this.setState({ details: false })
        console.log(222222222222)
    }

    returns = () => {
        this.setState({ details: true })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const { username, password } = values
                // this.props.dispatch({
                //   type:'userLogin/loginIn',
                //   payload:{
                //     username,
                //     password
                //   }
                // })
            }
        });
    };

    onOk = () => {
        console.log('ok')
        this.setState({ tit: !this.state.tit })
        Pubsub.publish('addMask', {
            tit: !this.state.tit
        })
    }

    componentDidMount(){
        this.props.dispatch({
            type:'userSearch/getSearchUser',
            payload:{
                name:'', 
                username: '',
                rolename:''
            }
        })
    }

    userSearch = () => {
        this.props.form.validateFields((err, values) => {
            console.log(this.props.form)
            if (!err) {
                // console.log('Received values of form: ', values);
                const { name, username, rolename } = values
                // this.props.dispatch({
                //   type:'userLogin/loginIn',
                //   payload:{
                //     username,
                //     password
                //   }
                // })
                console.log( name.length)
                if(name != '' && username != '' && rolename != ''){
                    this.props.dispatch({
                        type:'userSearch/getSearchUser',
                        payload:{
                            name, username, rolename
                        }
                    })
                }
                // this.props.form.setFieldsValue({
                //     name:'wwww',
                //     username:'jjjj',
                //     rolename:'zzzz'
                // })
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        if (this.state.details) {
            return (
                <div className='indexBox'>
                    {/* 用户管理 */}
                    <div>
                        <Form layout='inline' >
                            <Form.Item label="用户名" layout='inline' >
                            {getFieldDecorator('username', {
                                })(<Input placeholder="请输入您的用户名" />)}
                            </Form.Item>
                            <Form.Item label="姓名" layout='inline' >
                            {getFieldDecorator('name', {
                                })(<Input placeholder="请输入您的姓名" />)}
                            </Form.Item>
                            <Form.Item label="角色名称" layout='inline' >
                            {getFieldDecorator('rolename', {
                                })(<Input placeholder="请输入您的账户" />)}
                            </Form.Item>
                        </Form>
                        <div className='userManagerBtn'>
                            <div>
                                <Button type="primary" onClick={this.userSearch}>查询</Button>
                                <Button>重置</Button>
                            </div>
                        </div>
                        <div>
                            {/* <Button type="danger">新增</Button> */}
                            <Modal tit={this.state.tit} btn='新增' color='danger' width='600px' onOk={this.onOk}>
                                <AddNewUser tit={this.state.tit} />
                            </Modal>
                        </div>
                        <Table pagination={{defaultPageSize:2}}  dataSource={this.props.userSearch.data} columns={this.props.userSearch.columns} />
                        {/* <Table operations='详情' pathName='/api/manager/getTable' details={this.details} /> */}
                    </div>
                </div>
            )
        } else {
            const { getFieldDecorator } = this.props.form;
            return (
                <div className='indexBox'>

                    {/* <div className='userDetails'>
                        <h2>用户详情</h2>
                        <div>
                            <Button type='primary'>重置密码</Button>
                            <Button>保存</Button>
                            <Button type='danger'>删除</Button>
                        </div>
                    </div> */}
                    <PageHeaderTittle title='用戶詳情'>
                        <div>
                            <Button type='primary'>重置密码</Button>
                            <Button onClick={this.handleSubmit}>保存</Button>
                            {/* <Button type='danger'>删除</Button> */}
                            <Modal btn='刪除' color='danger'>
                                确定要删除这条信息吗？
                            </Modal>
                        </div>
                    </PageHeaderTittle>
                    <div className='userDetailsForm'>
                        <Form layout='inline' >

                            <Form.Item label="用户名" >
                                {getFieldDecorator('username', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入您的密码',
                                        },
                                    ],
                                })(<Input placeholder="请输入您的用户名" type='username' />)}
                            </Form.Item>

                            <Form.Item label="名字" >
                                {getFieldDecorator('name', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入您的名字',
                                        },
                                    ],
                                })(<Input placeholder="请输入您的名字" type='name' />)}
                            </Form.Item>
                            <Form.Item label="用户名">
                                {getFieldDecorator('rolename', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入您的角色名稱',
                                        },
                                    ],
                                })(<Input placeholder="请输入您的角色名稱" type='rolename' />)}
                            </Form.Item><br />

                            <Form.Item label="办公地址" layout='inline' >
                                <Input placeholder="请输入您的办公地址" />
                            </Form.Item>

                            <Form.Item label="联系方式" layout='inline' >
                                <Input placeholder="请输入您的联系方式" />
                            </Form.Item>
                            <Form.Item label="郵箱地址" layout='inline' >
                                <Input placeholder="请输入您的角色名稱" />
                            </Form.Item>
                        </Form>


                    </div>
                    <div className='userDetailsBtn'>
                        <Button onClick={this.returns} type='primary' className='userDetailsBtn'>返回</Button>
                    </div>
                </div>
            )
        }

    }
}

const userDetails = (state) => {
    console.log(state)
    return {
        ...state
    }
}
const UserDetailsPage = Form.create({ name: 'userDetails' })(UserDetails);
export default connect(userDetails)(UserDetailsPage)
