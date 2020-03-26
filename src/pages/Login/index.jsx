import React, { Component } from 'react'
import { Layout, Tabs  } from 'antd';
import FormLogin from '../../components/FormLogin'
import style from './index.less'
import Pubsub from 'pubsub-js'

import BankLogin from '../../components/FormLogin/bankLogin'

const { Header, Footer, Content } = Layout;
const { TabPane } = Tabs;

export default class index extends Component {

    callback = (key) => {
        console.log(key);
        this.setState({key})
        var data = {
            captcha: true
        }
        Pubsub.publish('captcha', data)
    }

    state = {
        key: '11111'
    }

    render() {
        return (
            <div className='loginIndex'>
                <div className='loginContent'>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="学校管理员登录" key="1">
                        <FormLogin {...this.props} pathname = {this.state.key}/>
                        </TabPane>
                        <TabPane tab="银行管理员登录" key="2">
                            <BankLogin />
                        </TabPane>
                        {/* <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                        </TabPane> */}
                    </Tabs>
                </div>
            </div>
        )
    }
}
