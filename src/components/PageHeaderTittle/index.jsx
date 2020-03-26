import React, { Component } from 'react'
import style from './index.less'
import {Button} from 'antd'

export default class index extends Component {
    render() {
        return (
            <div>
                <div className={style.userDetails}>
                    <h2>{this.props.title}</h2>
                    {this.props.children}
                    {/* <div>
                        <Button type='primary'>重置密码</Button>
                        <Button>保存</Button>
                        <Button type='danger'>删除</Button>
                    </div> */}
                </div>
            </div>
        )
    }
}
