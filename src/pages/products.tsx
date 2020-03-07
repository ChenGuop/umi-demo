import React from 'react';
import {connect} from 'umi';
import ProductList from '@/component/ProductList';
import styles from './products.css';

const Products = ({dispatch, productsdd}) => {
  function handleDelete(id) {
    dispatch({
      type: 'productsdd/deleteItem',
      payload: id,
    });
  }
  function handleAdd(index) {
    dispatch({
      type: 'productsdd/addItem',
      ppd: index,
    })
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList
        onDelete={handleDelete}
        onAdd={handleAdd}
        content={productsdd}/>
    </div>
  );
};

export default connect(({productsdd}) => ({productsdd}))(Products)
