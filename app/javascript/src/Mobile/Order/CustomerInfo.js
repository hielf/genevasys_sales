import React from 'react';
import { Grid, Space } from 'antd-mobile'
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
      <Space direction='vertical' style={ {'--gap': '32px'} }>
        <Grid columns={4} gap={32}>
            <Grid.Item span={2}>
              <p style={{ marginBottom: '5px', fontFamily: "'Roboto', sans-serif", }}>First</p>
              <Input placeholder=''
                style={{ '--font-size':'16px', }}
                onChange={val => { onChange1(val) }}
              />
            </Grid.Item>
            <Grid.Item span={2}>
              <p style={{ marginBottom: '5px', fontFamily: "'Roboto', sans-serif", }}>Last</p>
              <Input placeholder=''
                style={{ '--font-size':'16px' }}
                onChange={val => { onChange2(val) }}
              />
            </Grid.Item>
        </Grid>


        <Input placeholder='' clearable
          style={{ '--font-size':'16px' }}
          onChange={val => { onChange3(val) }}
        />

        <Input placeholder='' clearable
          style={{ '--font-size':'16px' }}
          onChange={val => { onChange4(val) }}
        />

        <Input placeholder='#Unit-Number Street' clearable
          style={{ '--font-size':'16px' }}
          onChange={val => { onChange5(val) }}
        />

        <Input placeholder='#Unit-Number Street' clearable
          style={{ '--font-size':'16px' }}
          onChange={val => { onChange6(val) }}
        />
      </Space>
    </>
  );
};

export default CustomerInfo;
