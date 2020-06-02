import { getList, editItem, addItem } from '../services/productsApi';

/*处理数据和逻辑*/
/*dva 通过 model 的概念把一个领域的模型管理起来，
包含同步更新 state 的 reducers，处理异步逻辑的 effects，订阅数据源的 subscriptions */

export default {
  // 表示在全局state上的Key
  namespace: 'products',
  /*初始值*/
  state: [
    { name: 'dva11', id: 'dva' },
    { name: 'antd3243', id: 'antd' },
    { name: 'react123', id: 'react' },
    { name: 'umijs', id: 'umijs' },
  ],
  /*等同于redux里的reducer， 接收action， 同步state 计算*/
  reducers: {
    deleteItem(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    addItem(state, { item }) {
      const content = [...state, item];
      // const empty = state[index];
      return content;
    },
    // 初始化 state
    initState(state, { response }) {
      const content = response;
      console.log(`products model addItem :`, content);
      // 直接返回数据
      return content;
    },
  },
  effects: {
    /*与服务器进行交互 使用 mock 模拟数据 使用ES6 中 yield关键字 call异步调用 */
    *search({ searchParam }, { call, put }) {
      console.log('search', searchParam);
      const response = yield call(getList, searchParam);
      // put 函数 是一个 类似于 dispatch
      yield put({
        type: 'initState',
        response,
      });
    },
    *editItem({ payload }, { call, put }) {
      const response = call(editItem, payload);
    },
  },
};
