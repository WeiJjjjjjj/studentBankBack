import {subjectManagerList} from '../services/req'
// import {Modal} from 'antd'
import Modal from '../components/Modal/index'

export default {
    namespace:'teacherManager',
    state:{
        data: [],
        columns: []
    },
    reducers:{
        getSubjectManagerList(state, {payload}){
            return {...state, ...payload}
        }
    },
    effects:{
        *getSubjectManagerListApi({payload}, {put, call}){
            const response = yield call(subjectManagerList, {...payload})
            const {flag ,data, columns} = response
            var operation = {
                title: '操作',
                dataIndex: 'operation',
                defaultSortOrder: 'descend',
                // sorter: (a, b) => a.age - b.age,
                render: function (text, record) {
                    return (<div className='operationBox'>
                        <a  onClick={() => payload.OperationsFun(text, record)}>编辑</a> 
                        {/* <Modal onOK={() => payload.OperationsFun(text, record)} btn='编辑'>您确定要删除该学科吗？</Modal> */}
                        <a className='operationBtn' onClick={() => payload.otherOperationsFun(text, record)}>删除</a>
                    </div>)
                }
            }
            columns.push(operation)
            columns.forEach(item => {
                item.align='center'
            });
            if(flag == 1){
                yield put({
                    type:'getSubjectManagerList',
                    payload:{
                        data,
                        columns
                    }
                })
            }
        }
    },
    subscriptions:{

    }
}