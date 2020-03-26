import React, { Component } from 'react'
import { Table } from 'antd'
import {connect} from 'dva'

class index extends Component {

    state={
        columns:[],
    }

    look = (text, record) => {
        console.log(text, record)
        console.log(this.props)
        this.props.details(text, record)
    }

    onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      }

    //   componentDidMount(){
    //       this._mountflag = true
    //       console.log(2222222)
    //       var columns = JSON.parse(JSON.stringify(this.props.getTableList.columns))
    //       console.log(this.props)
    //       let operation = {
    //         title: '操作',
    //         dataIndex: 'operation',
    //         render:(text, record) => 
    //             // state.data.length >= 1 ? (
    //                 <a onClick={() => this.look(record)}>Delete</a>
    //             //   ) : null,
    //     }
    //     columns.push(operation)
    //     if(this._mountflag == true){
    //         this.setState({columns})
    //     }
    //   }

    otherOperationsFun = (text, record) => {
        this.props.otherOperationsFun(text, record)
    }

    componentDidMount(){
        console.log(1111)
        var payload = {}
        if(this.props.otherOperations){
            payload={
                look:this.look,
                // url:'/api/manager/getTable'
                url:this.props.pathName,
                operations:this.props.operations,
                otherOperations:this.props.otherOperations,
                otherOperationsFun: this.otherOperationsFun
            }
        }else{
            payload={
                look:this.look,
                // url:'/api/manager/getTable'
                url:this.props.pathName,
                operations:this.props.operations,
            }
        }
        this.props.dispatch({
            type:'getTableList/GetTable',
            payload
        })
    }

      componentWillUnmount(){
          this._mountflag = false
      }


    render() {
        return (
            <div style={{background:'#fff', padding:'20px 0'}}>
                <Table
                    pagination={{ defaultPageSize: this.props.defaultPageSize || 4, showQuickJumper: true }} 
                    columns={this.props.getTableList.columns} 
                    dataSource={this.props.getTableList.data} 
                    onChange={this.onChange} 
                    align='center'
                    />
            </div>
        )
    }
}

const getTableList = (store) => {
    console.log(store)
    return {
        ...store
    }
}
export default connect(getTableList)(index)

