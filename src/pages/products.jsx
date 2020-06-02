import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import ProductList from '../component/ProductList';
import AddProduct from '../component/AddProduct';

import { Button, Modal, Form, Input, Select } from 'antd';
import styles from './products.css';

// dispatch 从 props 中获取 只要 dva connect
const Products = ({ dispatch, products }) => {
  // const Products = (props) => {
  // const {dispatch, products} = props; /// 简写
  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'products/search',
        searchParam: {
          size: 10,
          page: 0,
        },
      });
    }
    return {};
  }, []);
  function handleDelete(id) {
    dispatch({
      type: 'products/deleteItem',
      payload: id,
    });
  }
  function handleAdd(item) {
    dispatch({
      type: 'products/addItem',
      item,
    });
  }
  function handleModify(index) {
    //   type: 'products/editItem',
    //   ppd: index,
    // })
  }

  return (
    <div>
      <h2>List of Products</h2>
      {/*<AddProduct onAdd={handleAdd} />*/}
      <ProductList onDelete={handleDelete} content={products} />
    </div>
  );
};
// MapStateToProps 映射关系
export default connect(({ products }) => ({ products }))(Products);
