import { Table, Popconfirm, Button } from 'antd';

/*编写 UI Component*/
/*随着应用的发展，你会需要在多个页面分享 UI 元素 (或在一个页面使用多次)，
在 umi 里你可以把这部分抽成 component 。*/
const ProductList = ({ onDelete, content, onAdd }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Action',
      render: (text, record, index)=>{
        console.log(text, record, index)
        return (
         <Popconfirm title='Delete?'
                     onConfirm={() => onDelete(record.id)}
                     onCancel={() => onAdd(index)}>
           <Button>Delete</Button>
         </Popconfirm>
        );
      }
     },
  ];
  return (
    <Table
      dataSource={content}
      columns={columns}/>
  );
};

export default ProductList;



