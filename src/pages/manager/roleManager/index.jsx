import React, { Component } from 'react'
import TimePick from '../../../components/TimePick/index'
import {Table, Popconfirm} from 'antd'
import {connect} from 'dva'


class index extends Component {
    state={
        columns:[],
    }

    look = (text, record) => {
        console.log(text, record)
    }

    onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      }

      componentDidMount(){
          this._mountflag = true
          var columns = JSON.parse(JSON.stringify(this.props.getInfor.columns))
          console.log(this.props)
          let operation = {
            title: '操作',
            dataIndex: 'operation',
            render:(text, record) => 
                // state.data.length >= 1 ? (
                    <a onClick={() => this.look(record)}>Delete</a>
                //   ) : null,
        }
        columns.push(operation)
        if(this._mountflag == true){
            this.setState({columns})
        }

        this.props.dispatch({
            type:'getInfor/GetInfor',
            payload:{
                look:this.look
            }
        })
      }

      componentWillUnmount(){
          this._mountflag = false
      }

    render(){
        return (
            <div>
                <TimePick />
                {/* {this.props} */}
                <Table
                pagination ={{defaultPageSize:2, showQuickJumper: true }} columns={this.props.getInfor.columns} dataSource={this.props.getInfor.data} onChange={this.onChange} />
            </div>
        )
    }
 }

 const getInfor = (state) => {
     console.log(state)
     
    return ({
        ...state
    })
 }

 export default connect(getInfor)(index)