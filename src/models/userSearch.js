
import {getUserSearch} from '../services/req'

export default {
    namespace:'userSearch',
    state:{
        data: [],
        columns: []
    },
    reducers:{
        searchUser(state, {payload}){
            return {...state, ...payload}
        }
    },
    effects:{
        *getSearchUser({payload} , { call, put, select }){
            var response = yield call(getUserSearch, {...payload})
            console.log(response)
            var {flag, data, columns} = response
            if(flag == 1){
                yield put({
                    type:'searchUser',
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