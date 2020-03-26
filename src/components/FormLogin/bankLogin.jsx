
import { Form, Icon, Input, Button, Checkbox, Row, Col} from 'antd';
import React, { Component } from 'react'
import { Select } from 'antd';
import {connect} from 'dva'
import style from './index.less'
import BankCaptcha from './BankCaptcha'
import style1 from './bankLogin.less'

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 16,
      offset: 5,
    },
    sm: {
      span: 16,
      offset: 5,
    },
  },
};

class BankLogin extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const {username, password} = values
        this.props.dispatch({
          type:'userLogin/loginIn',
          payload:{
            username,
            password
          }
        })
      }
    });
    console.log(this)
    // this.props.dispatch({
    //   type:'userLogin/login',
    //   action:{
    //     username: '小明',
    //     password: '123456'
    //   }
    // })
  };

  state = {
    checkNick: false,
  };

  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        console.info('success');
      }
    });
  };

  handleChange = e => {
    this.setState(
      {
        checkNick: e.target.checked,
      },
      () => {
        this.props.form.validateFields(['password'], { force: true });
      },
    );
  };

onChange =(value) => {
    console.log(`selected ${value}`);
  }
  
onBlur = () => {
    console.log('blur');
  }
  
onFocus = () => {
    console.log('focus');
  }
  
onSearch = (val) => {
    console.log('search:', val);
  }

  componentWillReceiveProps(v, n){
    console.log(v, n)
  }

  componentDidMount(){
    console.log(this)
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    
    return (
        <div className='bankLoginBox'>
            <Form onSubmit={this.handleSubmit} className={`$(style.loginForm)`}>
        <Form.Item {...formItemLayout} label="账户" >
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: '请输入您的账户',
              },
            ],
          })(<Input placeholder="请输入您的账户" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="密码">
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '请输入您的密码',
              },
            ],
          })(<Input placeholder="请输入您的密码" type='password'/>)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout} className='checkedBtn'>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住密码</Checkbox>)}
        </Form.Item>

        <Form.Item {...formItemLayout} label="验证码">
          {/* <Row gutter={8}> */}
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: 'Please input the captcha you got!' }],
              })(<Input />)}
            </Col>
            <BankCaptcha />
        </Form.Item>

        <div className='button'>
          <Form.Item >
            <Button type="primary" htmlType="submit" block className="login-form-button">
              登  录
            </Button>
          </Form.Item>
        </div>
        
      </Form>
        </div>
      
    );
  }
}

const login = (state) => {
  return {
    username:state.userLogin.username,
    password: state.userLogin.password
  }
}

 const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(BankLogin);
 export default connect(login)(WrappedNormalLoginForm)
