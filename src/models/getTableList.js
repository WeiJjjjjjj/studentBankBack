// import {getTable} from '../services/login'
import request from '../utils/request'
const getTable = async function (params) {
    console.log(params)
    // return request('/api/manager/getTable', {
    return request(params.url, {
        method: 'POST',
        data: { ...params }
    });
}

export default {
    namespace: 'getTableList',
    state: {
        data: [],
        columns: []
    },
    reducers: {
        getTable(state, { payload }) {
            return { ...state, ...payload }
        }
    },
    effects: {
        *GetTable({ payload }, { call, put }) {
            console.log(payload)
            var response = null
            response = yield call(getTable, { url: payload.url });
            console.log(response)
            var res = JSON.parse(JSON.stringify(response))
            let { data, columns } = res
            let operation = {}
            if (payload.otherOperations) {
                operation = {
                    title: '操作',
                    dataIndex: 'operation',
                    defaultSortOrder: 'descend',
                    // sorter: (a, b) => a.age - b.age,
                    render: function (text, record) {
                        return (<div>
                            <a onClick={() => payload.look(text, record)}>{payload.operations}</a> 
                            <a onClick={() => payload.otherOperationsFun(text, record)}>{payload.otherOperations}</a>
                        </div>)
                    }
                }
            }else{
                operation = {
                    title: '操作',
                    dataIndex: 'operation',
                    defaultSortOrder: 'descend',
                    // sorter: (a, b) => a.age - b.age,
                    render: function (text, record) {
                        return (<div>
                            <a onClick={() => payload.look(text, record)}>{payload.operations}</a> 
                        </div>)
                    }
                }
            }
            columns.push(operation)
            columns.forEach(item => {
                item.align='center'
            });
            if (response.flag == 1) {
                yield put({
                    type: 'getTable',
                    payload: {
                        data,
                        columns
                    }
                })
            }


        }
    },
    subscriptions: {
        updateInfor({ dispatch, history }) {
            history.listen(({ pathname }) => {
                if (pathname == "/systemmanager/usermanager") {
                    console.log(666666666)
                    // dispatch({
                    //     type: 'GetTable', payload: {
                    //         url: '/api/manager/getTable',
                    //         data: 22222
                    //     }
                    // })
                }
            })
        }
    }
}