import React from 'react';
import { Space, Grid } from 'antd-mobile'
import { Form, Input } from 'antd-mobile'

const CustomerInfo = ({formData, setFormData}) => {

  const onChange1 = (val) => {
    setFormData((formData) => ({ ...formData, firstName: val }));
  }

  const onChange2 = (val) => {
    setFormData((formData) => ({ ...formData, lastName: val }));
  }

  return (
    <Form style={{ fontWeight:'300', }} layout='horizontal'>
      <Form.Item label='First Name' name='firstName' style={{ fontSize:'var(--adm-font-size-6)', }}>
        <Input placeholder='Your First Name' clearable
          style={{ '--font-size':'var(--adm-font-size-6)', }}
          onChange={val => { onChange1(val) }}
        />
      </Form.Item>
      <Form.Item label='Last Name' name='lastName' style={{ fontSize:'var(--adm-font-size-6)', }}>
        <Input placeholder='Your Last Name' clearable
          style={{ '--font-size':'var(--adm-font-size-6)' }}
          onChange={val => { onChange2(val) }}
        />
      </Form.Item>
    </Form>
  );
};

export default CustomerInfo;
