// // import { Form, Input, Button, Checkbox } from 'antd';
// // import React, { Component } from 'react'
// // import { UserOutlined, LockOutlined } from '@ant-design/icons';

// // export default class index extends Component{
// //     onFinish = values => {
// //         console.log('Received values of form: ', values);
// //       };
    
// //       render(){
// //         return (
// //             <Form
// //               name="normal_login"
// //               className="login-form"
// //               initialValues={{ remember: true }}
// //             //   onFinish={onFinish}
// //             >
// //               <Form.Item
// //                 name="username"
// //                 rules={[{ required: true, message: 'Please input your Username!' }]}
// //               >
// //                 <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
// //               </Form.Item>
// //               <Form.Item
// //                 name="password"
// //                 rules={[{ required: true, message: 'Please input your Password!' }]}
// //               >
// //                 <Input
// //                   prefix={<LockOutlined className="site-form-item-icon" />}
// //                   type="password"
// //                   placeholder="Password"
// //                 />
// //               </Form.Item>
// //               <Form.Item>
// //                 <Form.Item name="remember" valuePropName="checked" noStyle>
// //                   <Checkbox>Remember me</Checkbox>
// //                 </Form.Item>
        
// //                 <a className="login-form-forgot" href="">
// //                   Forgot password
// //                 </a>
// //               </Form.Item>
        
// //               <Form.Item>
// //                 <Button type="primary" htmlType="submit" className="login-form-button">
// //                   Log in
// //                 </Button>
// //                 Or <a href="">register now!</a>
// //               </Form.Item>
// //             </Form>
// //           );
// //       }
      
// //     };



// import { Form, Icon, Input, Button, Checkbox, Row, Col} from 'antd';
// import React, { Component } from 'react'
// import { Select } from 'antd';
// import {connect} from 'dva'
// import style from './index.less'
// import Captcha from './captcha'

// const { Option } = Select;

// const formItemLayout = {
//   labelCol: { span: 5 },
//   wrapperCol: { span: 16 },
// };
// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 16,
//       offset: 5,
//     },
//     sm: {
//       span: 16,
//       offset: 5,
//     },
//   },
// };

// class NormalLoginForm extends React.Component {
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values);
//         const {username, password} = values
//         this.props.dispatch({
//           type:'userLogin/loginIn',
//           payload:{
//             username,
//             password
//           }
//         })
//       }
//     });
//     console.log(this)
//     // this.props.dispatch({
//     //   type:'userLogin/login',
//     //   action:{
//     //     username: '小明',
//     //     password: '123456'
//     //   }
//     // })
//   };

//   state = {
//     checkNick: false,
//   };

//   check = () => {
//     this.props.form.validateFields(err => {
//       if (!err) {
//         console.info('success');
//       }
//     });
//   };

//   handleChange = e => {
//     this.setState(
//       {
//         checkNick: e.target.checked,
//       },
//       () => {
//         this.props.form.validateFields(['password'], { force: true });
//       },
//     );
//   };

// onChange =(value) => {
//     console.log(`selected ${value}`);
//   }
  
// onBlur = () => {
//     console.log('blur');
//   }
  
// onFocus = () => {
//     console.log('focus');
//   }
  
// onSearch = (val) => {
//     console.log('search:', val);
//   }

//   componentWillReceiveProps(v, n){
//     console.log(v, n)
//   }

//   componentDidMount(){
//     console.log(this)
//   }

//   render() {
//     const { getFieldDecorator } = this.props.form;
    
//     return (
//       <Form onSubmit={this.handleSubmit} className={`$(style.loginForm)`}>
//         <Form.Item {...formItemLayout} label="选择学校" required className='selectedSchool'>
//         {getFieldDecorator('username', {
//             rules: [
//               {
//                 required: true,
//                 message: '请选择您的学校',
//               },
//             ],
//           })(<Select
//             showSearch
//             placeholder="请选择您的学校"
//             optionFilterProp="children"
//             onChange={this.onChange}
//             onFocus={this.onFocus}
//             onBlur={this.onBlur}
//             onSearch={this.onSearch}
//             filterOption={(input, option) =>
//             option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
//             }
//         >
//             <Option value="jack">{this.props.username}</Option>
//             <Option value="lucy">{this.props.password}</Option>
//             <Option value="tom">Tom</Option>
//         </Select>)}
//         </Form.Item>
//         <Form.Item {...formItemLayout} label="账户" >
//           {getFieldDecorator('username', {
//             rules: [
//               {
//                 required: true,
//                 message: '请输入您的账号',
//               },
//             ],
//           })(<Input placeholder="请输入您的账户" />)}
//         </Form.Item>
//         <Form.Item {...formItemLayout} label="密码">
//           {getFieldDecorator('password', {
//             rules: [
//               {
//                 required: true,
//                 message: '请输入您的密码',
//               },
//             ],
//           })(<Input placeholder="请输入您的密码" type='password'/>)}
//           </Form.Item>
//           <Form.Item {...tailFormItemLayout} className='checkedBtn'>
//           {getFieldDecorator('remember', {
//             valuePropName: 'checked',
//             initialValue: true,
//           })(<Checkbox>记住密码</Checkbox>)}
//         </Form.Item>

//         <Form.Item {...formItemLayout} label="验证码">
//           {/* <Row gutter={8}> */}
//             <Col span={12}>
//               {getFieldDecorator('captcha', {
//                 rules: [{ required: true, message: 'Please input the captcha you got!' }],
//               })(<Input />)}
//             </Col>
//             <Captcha />
//         </Form.Item>

//         <div className='button'>
//           <Form.Item >
//             <Button type="primary" htmlType="submit" block className="login-form-button">
//               登  录
//             </Button>
//           </Form.Item>
//         </div>
        
//       </Form>
//     );
//   }
// }

// const login = (state) => {
//   return {
//     username:state.userLogin.username,
//     password: state.userLogin.password
//   }
// }

//  const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
//  export default connect(login)(WrappedNormalLoginForm)


import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import React, { Component } from 'react'
import { Select } from 'antd';
import style from './index.less'
import {connect} from 'dva'
import Pubsub from 'pubsub-js'

class AddNewUser extends Component {

    componentDidMount(){
        Pubsub.subscribe('addMask', (msg, data) => {
            console.log(data)
            if(data.tit){
                this.props.form.validateFields((err, values) => {
                    if (!err) {
                    //   console.log('Received values of form: ', values);
                    //   const {username, password} = values
                      // this.props.dispatch({
                      //   type:'userLogin/loginIn',
                      //   payload:{
                      //     username,
                      //     password
                      //   }
                      // })
                    }else{
                        console.log(11111)
                    }
                  });
            }
        })
    }
    

    render() {

        const { getFieldDecorator } = this.props.form;
        return (
            <div className='formBox' >
                
                <Form  layout='inline'>

                            <Form.Item label="用户名">
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
                            <Form.Item label="角色名称">
                                {getFieldDecorator('rolename', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入您的角色名稱',
                                        },
                                    ],
                                })(<Input placeholder="请输入您的角色名稱" type='rolename' />)}
                            </Form.Item><br/>

                            <Form.Item label="办公地址" layout='inline' >
                                <Input placeholder="请输入您的办公地址" />
                            </Form.Item><br/>

                            <Form.Item label="联系方式" layout='inline' >
                                <Input placeholder="请输入您的联系方式" />
                            </Form.Item>
                            <Form.Item label="邮箱地址" layout='inline' >
                                <Input placeholder="请输入您的角色名稱" />
                            </Form.Item>
                        </Form>

            </div>
        )
    }
}

const AddNewUserModal = Form.create({ name: 'AddNewUser' })(AddNewUser);

export default AddNewUserModal