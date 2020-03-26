// import { queryCurrent, query as queryUsers } from '@/services/user';
import { fakeAccountLogin, userLogin } from '@/services/login';
import router from 'umi/router'
import {notification} from 'antd'

const UserLogin = {
  namespace: 'userLogin',
  state: {
    username: '',
    password: ''
  },
  reducers:{
      login(state,action){
        let _state = JSON.parse(JSON.stringify(state))
        _state.username = action.action.username
        _state.password = action.action.password
        console.log(action, state)
        return _state
      }
  },
  effects:{
    *loginIn({ payload }, { call, put }){
        console.log(payload)
        const response = yield call(userLogin, payload);
        console.log(response)
        if(response.flag == 1){
            router.push('/')
        }else{
            notification.error({
                message:'登录失败',
                description:'账户或密码错误， 请重新登录'
            })
        }
    }
  },
  subscriptions:{
      getName({dispatch,history}){
        history.listen(({pathname}) => {
            console.log(pathname)
        })
      }
  }
//   effects: {
//     *fetch(_, { call, put }) {
//       const response = yield call(queryUsers);
//       yield put({
//         type: 'save',
//         payload: response,
//       });
//     },

//     *fetchCurrent(_, { call, put }) {
//       const response = yield call(queryCurrent);
//       yield put({
//         type: 'saveCurrentUser',
//         payload: response,
//       });
//     },
//   },
//   reducers: {
//     saveCurrentUser(state, action) {
//       return { ...state, currentUser: action.payload || {} };
//     },

//     changeNotifyCount(
//       state = {
//         currentUser: {},
//       },
//       action,
//     ) {
//       return {
//         ...state,
//         currentUser: {
//           ...state.currentUser,
//           notifyCount: action.payload.totalCount,
//           unreadCount: action.payload.unreadCount,
//         },
//       };
//     },
//   },
};
export default UserLogin;
