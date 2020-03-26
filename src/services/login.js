import request from '@/utils/request';
export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}
export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
export async function userLogin(params){
  return request('/api/login/userlogin', {
    method: 'POST',
    data: params,
  });
}
export async function infor(params){
  return request('/api/manager/getInfor', {
    method: 'POST',
    data: params,
  });
}

export async function getTable(params){
  console.log(999999)
  return request('/api/manager/getTable', {
    method: 'POST',
    data:{...params}
  });
}

export async function getTables(params){
  // console.log(999999)
  return request('/api/manager/getTables', {
    method: 'POST',
    data:{...params}
  });
}