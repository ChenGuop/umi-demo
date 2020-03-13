import React, { useState } from 'react';
import { Form, Input, Button, Select, Modal } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const AddProduct = ({ onAdd }) => {
  const [visible, setVisible] = useState(false);
  const { Option } = Select;

  /*=========添加数据=========*/
  function showModal() {
    setVisible(true);
  }

  function handleOk(e) {
    console.log(e);
    setVisible(false);
  }

  function handleCancel(e) {
    console.log(e);
    setVisible(false);
  }
  const [form] = Form.useForm();

  const onGenderChange = value => {
    form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  };

  const onFinish = values => {
    console.log(values);
    onAdd(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'java',
    });
  };

  return (
    <React.Fragment>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="添加列表数据"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="id" label="id" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="name" label="name" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="python">python</Option>
              <Option value="java">java</Option>
              <Option value="php">php</Option>
            </Select>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
            {/*<Button type="link" htmlType="button" onClick={onFill}>
              Fill form
            </Button>*/}
          </Form.Item>
        </Form>
      </Modal>
    </React.Fragment>
  );
};

export default AddProduct;
