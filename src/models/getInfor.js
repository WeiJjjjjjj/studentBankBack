import {infor} from '../services/login'

export default {
    namespace:'getInfor',
    state:{
        data:[],
        columns: []
    },
    reducers:{
        List(state, {payload}){
            // let {}
            console.log(state)
            console.log(payload)
            return { ...state, ...payload}
        }
    },
    effects:{
        *GetInfor({payload} , { call, put, select }){
            console.log(payload.look)
            const response = yield call(infor);
            const state = yield select(state => state);
            console.log(state)
            var res = JSON.parse(JSON.stringify(response))
            let {data, columns} = res
            let operation = {
                    title: '操作',
                    dataIndex: 'operation',
                    defaultSortOrder: 'descend',
                    sorter: (a, b) => a.age - b.age,
                    render:function(text, record) {
                        // return <a onClick={() => this.look(record)}>Delete</a>
                        // return <a onClick={()=>{console.log(this)}}>Delete</a>
                        return <a onClick={() => payload.look(text, record)}>Delete</a>
                    }
                            // state.data.length >= 1 ? (
                                
                            //   ) 
                }
            columns.push(operation)
            if(response.flag == 1){
                yield put({
                    type:'List',
                    payload:{
                        data ,
                        columns 
                    }
                })
            }else{
                // notification.error({
                //     message:'登录失败',
                //     description:'账户或密码错误， 请重新登录'
                // })
            }
        }
      },
    subscriptions:{
        updateInfor({dispatch, history}){
            history.listen(({pathname}) => {
                if(pathname == "/manager/rolemanager"){
                    console.log(3333)
                    // dispatch({type:'GetInfor'})
                }
            })
        }
    }
}