import React, { Component } from 'react'
import {connect} from 'dva'

class index extends Component {
    render() {
        return (
            <div>
                用户管理
            </div>
        )
    }
}

const aa = (state) => {
    console.log(state)
    return {
        ...state
    }
}
export default connect(aa)(index)
