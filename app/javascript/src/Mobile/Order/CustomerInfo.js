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
      <Form.Item label='Contact Phone' name='contactPhone' style={{ fontSize:'var(--adm-font-size-6)', }}>
        <Input placeholder='Your Phone Number' clearable
          style={{ '--font-size':'var(--adm-font-size-6)' }}
          onChange={val => { onChange3(val) }}
        />
      </Form.Item>
      <Form.Item label='E-mail' name='email' style={{ fontSize:'var(--adm-font-size-6)', }}>
        <Input placeholder='Your E-mail address' clearable
          style={{ '--font-size':'var(--adm-font-size-6)' }}
          onChange={val => { onChange4(val) }}
        />
      </Form.Item>
      <Form.Item label='Address' name='installationAddress' style={{ fontSize:'var(--adm-font-size-6)', }}>
        <Input placeholder='#Unit-Number Street' clearable
          style={{ '--font-size':'var(--adm-font-size-6)' }}
          onChange={val => { onChange5(val) }}
        />
      </Form.Item>
      <Form.Item label='E911 Address' name='ipPhoneAddress' style={{ fontSize:'var(--adm-font-size-6)', }}>
        <Input placeholder='#Unit-Number Street' clearable
          style={{ '--font-size':'var(--adm-font-size-6)' }}
          onChange={val => { onChange6(val) }}
        />
      </Form.Item>
    </Form>
  );
};

export default CustomerInfo;
