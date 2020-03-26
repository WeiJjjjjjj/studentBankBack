import React, { Component } from 'react'
import {Button, Form, Input} from 'antd'
import Table from '../../../components/Table/index'
import PageHeaderTittle from '../../../components/PageHeaderTittle/index'
import Tree from '../../../components/Tree'
import { connect } from 'dva'

class index extends Component {

    state = {
        update: true
    }
    
    details = () => {
        console.log(555)
    }

    click = () => {
        this.setState({update: false})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            const {username, password} = values
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

      returns = () => {
          console.log(this.props)
          this.setState({update: true})
      }

    render() {
        if(this.state.update){
            return (
            <div style={{background:'#fff'}} className='indexBox'>
                <Button type='danger'onClick={this.click}>新增</Button>
                <Table pathName ='/api/manager/getTables' operations='详情' defaultPageSize = {5} details={this.details}/>
            </div>
            )
        }else{
            const { getFieldDecorator } = this.props.form;
            return (
                <div className='indexBox'>
                    <PageHeaderTittle title='新增角色'>
                        <div>
                            <Button type='primary'>確認</Button>
                            <Button type='danger'>取消</Button>
                        </div>
                    </PageHeaderTittle>


                        <Form  layout='inline' >

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
                            </Form>

                    <Tree></Tree>
                    <div>
                        <Button type='primary' onClick={this.returns}>返回</Button>
                    </div>
                </div>
            )
        }
        
    }
}

const addUser = (state) => {
    return{
        ...state
    }
}

const AddNewUser = Form.create({ name: 'addUser' })(index);

export default connect(addUser)(AddNewUser)