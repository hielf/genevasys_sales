import React from 'react';
import { Space } from 'antd-mobile'
import { Form, Input } from 'antd-mobile'

const CustomerInfo = ({formData, setFormData}) => {

  const onChange1 = (val) => {
    setFormData((formData) => ({ ...formData, firstName: val }));
  }

  const onChange2 = (val) => {
    setFormData((formData) => ({ ...formData, lastName: val }));
  }

  const onChange3 = (val) => {
    setFormData((formData) => ({ ...formData, contactPhone: val }));
  }

  const onChange4 = (val) => {
    setFormData((formData) => ({ ...formData, email: val }));
  }

  const onChange5 = (val) => {
    setFormData((formData) => ({ ...formData, installationAddress: val }));
  }

  const onChange6 = (val) => {
    setFormData((formData) => ({ ...formData, ipPhoneAddress: val }));
  }

  return (
    <Form style={{ fontWeight:'300', }} layout='vertical'>
      <Form.Item label='First Name' name='firstName' style={{ fontSize:'16px', }}>
        <Input placeholder='' clearable
          style={{ '--font-size':'16px', }}
          onChange={val => { onChange1(val) }}
        />
      </Form.Item>
      <Form.Item label='Last Name' name='lastName' style={{ fontSize:'16px', }}>
        <Input placeholder='' clearable
          style={{ '--font-size':'16px' }}
          onChange={val => { onChange2(val) }}
        />
      </Form.Item>
      <Form.Item label='Contact Phone' name='contactPhone' style={{ fontSize:'16px', }}>
        <Input placeholder='' clearable
          style={{ '--font-size':'16px' }}
          onChange={val => { onChange3(val) }}
        />
      </Form.Item>
      <Form.Item label='E-mail' name='email' style={{ fontSize:'16px', }}>
        <Input placeholder='' clearable
          style={{ '--font-size':'16px' }}
          onChange={val => { onChange4(val) }}
        />
      </Form.Item>
      <Form.Item label='Address' name='installationAddress' style={{ fontSize:'16px', }}>
        <Input placeholder='#Unit-Number Street' clearable
          style={{ '--font-size':'16px' }}
          onChange={val => { onChange5(val) }}
        />
      </Form.Item>
      <Form.Item label='E911 Address' name='ipPhoneAddress' style={{ fontSize:'16px', }}>
        <Input placeholder='#Unit-Number Street' clearable
          style={{ '--font-size':'16px' }}
          onChange={val => { onChange6(val) }}
        />
      </Form.Item>
    </Form>
  );
};

export default CustomerInfo;
