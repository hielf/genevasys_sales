import React, { useState } from 'react';
import { Grid, Space } from 'antd-mobile'
import { Form, Input, Divider, Picker, Button } from 'antd-mobile'

const PaymentInfo = ({formData, setFormData}) => {

  const onChange1 = (val) => {
    setFormData((formData) => ({ ...formData, cardFirstName: val }));
  }

  const onChange2 = (val) => {
    setFormData((formData) => ({ ...formData, cardLastName: val }));
  }

  const onChange3 = (val) => {
    setFormData((formData) => ({ ...formData, cardNumber: val }));
  }

  const onChange4 = (val) => {
    setFormData((formData) => ({ ...formData, mm: val }));
  }

  const onChange5 = (val) => {
    setFormData((formData) => ({ ...formData, yy: val }));
  }

  const onChange6 = (val) => {
    setFormData((formData) => ({ ...formData, cvv: val }));
  }

  const onChange7 = (val) => {
    setFormData((formData) => ({ ...formData, cardRegistrationAddress: val }));
  }

  return (
    <>
      <Space direction='vertical' style={ {'--gap': '32px'} }>
        <Grid columns={6} style={{ '--gap-horizontal': '32px' }}>
          <Grid.Item span={6}>
            <Divider
              contentPosition='left'
              style={{ color: '#777777', fontSize: "18px", fontFamily: "'Oswald', sans-serif", marginBottom: '0px', marginTop: '0px', }}>
              Payment Information
            </Divider>
          </Grid.Item>
          <Grid.Item span={3}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Holder's First Name</p>
            <Input placeholder=''
              style={{ '--font-size':'15px', }}
              onChange={val => { onChange1(val) }}
              value={formData.cardFirstName}
            />
          </Grid.Item>
          <Grid.Item span={3}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Last Name</p>
            <Input placeholder=''
              style={{ '--font-size':'15px' }}
              onChange={val => { onChange2(val) }}
              value={formData.cardLastName}
            />
          </Grid.Item>
          <Grid.Item span={6}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Card Number</p>
            <Input placeholder=''
              style={{ '--font-size':'16px' }}
              onChange={val => { onChange3(val) }}
              value={formData.cardNumber}
            />
          </Grid.Item>
          <Grid.Item span={2}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Month</p>
            <Input placeholder='##'
              style={{ '--font-size':'16px' }}
              onChange={val => { onChange4(val) }}
              value={formData.mm}
            />
          </Grid.Item>
          <Grid.Item span={2}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Year</p>
            <Input placeholder='##'
              style={{ '--font-size':'16px' }}
              onChange={val => { onChange5(val) }}
              value={formData.yy}
            />
          </Grid.Item>
          <Grid.Item span={2}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>CVV</p>
            <Input placeholder='###'
              style={{ '--font-size':'16px' }}
              onChange={val => { onChange6(val) }}
              value={formData.cvv}
            />
          </Grid.Item>
          <Grid.Item span={6}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Card Registration Address</p>
            <Input placeholder=''
              style={{ '--font-size':'16px' }}
              onChange={val => { onChange7(val) }}
              value={formData.cardRegistrationAddress}
            />
          </Grid.Item>
        </Grid>

      </Space>
    </>
  );
};

export default PaymentInfo;
