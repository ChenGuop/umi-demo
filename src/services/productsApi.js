import request from './request';

export async function getList() {
  return request('/api/products');
}

export async function editItem(item) {
  return request('/api/products', {
    method: 'PUT',
    data: item,
  });
}
export async function addItem(item) {
  return request('/api/products', {
    method: 'POST',
    data: item,
  });
}
