import React from 'react';
import { Grid, Space } from 'antd-mobile'
import { Form, Input, Divider } from 'antd-mobile'

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
        <Grid columns={4} style={{ '--gap-horizontal': '32px' }}>
          <Grid.Item span={4}>
            <Divider
              contentPosition='left'
              style={{ color: '#777777', fontSize: "18px", fontFamily: "'Oswald', sans-serif", marginBottom: '0px', marginTop: '0px', }}>
              Personal Infomation
            </Divider>
          </Grid.Item>
          <Grid.Item span={2}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>First Name</p>
            <Input placeholder=''
              style={{ '--font-size':'15px', }}
              onChange={val => { onChange1(val) }}
            />
          </Grid.Item>
          <Grid.Item span={2}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Last Name</p>
            <Input placeholder=''
              style={{ '--font-size':'15px' }}
              onChange={val => { onChange2(val) }}
            />
          </Grid.Item>
          <Grid.Item span={4}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Phone Number</p>
            <Input placeholder=''
              style={{ '--font-size':'16px' }}
              onChange={val => { onChange3(val) }}
            />
          </Grid.Item>
          <Grid.Item span={4}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Email</p>
            <Input placeholder='' clearable
              style={{ '--font-size':'16px' }}
              onChange={val => { onChange4(val) }}
            />
          </Grid.Item>
        </Grid>

        <Grid columns={4} style={{ '--gap-horizontal': '32px' }}>
          <Grid.Item span={4}>
            <Divider
              contentPosition='left'
              style={{ color: '#777777', fontSize: "18px", fontFamily: "'Oswald', sans-serif", marginBottom: '0px', marginTop: '0px', }}>
              Address Information
            </Divider>
          </Grid.Item>
          <Grid.Item span={4}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Installation Address</p>
            <Input placeholder='#Unit-Number Street' clearable
              style={{ '--font-size':'16px' }}
              onChange={val => { onChange5(val) }}
            />
          </Grid.Item>
          <Grid.Item span={4}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>E911 Address</p>
            <Input placeholder='#Unit-Number Street' clearable
              style={{ '--font-size':'16px' }}
              onChange={val => { onChange6(val) }}
            />
          </Grid.Item>
        </Grid>

      </Space>
    </>
  );
};

export default CustomerInfo;
