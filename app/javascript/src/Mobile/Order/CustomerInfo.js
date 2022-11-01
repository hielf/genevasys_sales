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
    <>
      <Form layout='vertical'>
        <Form.Item label='First Name' name='firstName'>
          <Input placeholder='' clearable/>
        </Form.Item>

      </Form>
    </>
  );
};

export default CustomerInfo;
