import request from '@/utils/request';
export async function getUserSearch(params) {
  return request('/api/rolemanager/userSearch', {
    method: 'POST',
    data: params,
  });
}

export async function subjectManagerList(params) {
  return request('/api/schoolmanager/subjectManagerList', {
    method: 'POST',
    data: params,
  });
}