/*处理数据和逻辑*/
/*dva 通过 model 的概念把一个领域的模型管理起来，
包含同步更新 state 的 reducers，处理异步逻辑的 effects，订阅数据源的 subscriptions */

export default {
  // 表示在全局state上的Key
  namespace: 'productsdd',
  /*初始值*/
  state: [
    { name: 'dva', id: 'dva' },
    { name: 'antd', id: 'antd' },
  ],
  /*等同于redux里的reducer， 接收action， 同步state*/
  reducers: {
    deleteItem(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    addItem(state, {ppd: index}){
      const empty =  state[index];
      const content = [...state, empty];
      return content;
    }
  },
};
