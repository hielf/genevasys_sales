import React, { useState } from 'react';
import { Grid, Space } from 'antd-mobile'
import { Form, Input, Divider, Picker, Button } from 'antd-mobile'
import { formatPhoneNumber, formatPostalCode } from '../Functions/FormFormater'

const CustomerInfo = ({formData, setFormData}) => {

  const [city, setCity] = useState('')

  const basicColumns = [
    [
      { label: 'VANCOUVER', value: 'VANCOUVER' },
      { label: 'BURNABY', value: 'BURNABY' },
      { label: 'RICHMOND', value: 'RICHMOND' },
      { label: 'WEST VANCOUVER', value: 'WEST VANCOUVER' },
      { label: 'NORTH VANCOUVER', value: 'NORTH VANCOUVER' },
      { label: 'NEW WESTMINSTER', value: 'NEW WESTMINSTER' },
      { label: 'SURREY', value: 'SURREY' },
      { label: 'WHITE ROCK', value: 'WHITE ROCK' },
      { label: 'COQUITLAM', value: 'COQUITLAM' },
      { label: 'PORT COQUITLAM', value: 'PORT COQUITLAM' },
      { label: 'DELTA', value: 'DELTA' },
      { label: 'LANGLEY', value: 'LANGLEY' },
      { label: 'PORT MOODY', value: 'PORT MOODY' },
      { label: 'MAPLE RIDGE', value: 'MAPLE RIDGE' },
    ],
  ]

  const onChange1 = (val) => {
    if (formData.firstName === formData.cardFirstName) {
      setFormData((formData) => ({ ...formData, cardFirstName: val }));
    }
    setFormData((formData) => ({ ...formData, firstName: val }));
  }

  const onChange2 = (val) => {
    if (formData.lastName === formData.cardLastName) {
      setFormData((formData) => ({ ...formData, cardLastName: val }));
    }
    setFormData((formData) => ({ ...formData, lastName: val }));
  }

  const onChange3 = (val) => {
    const formattedInputValue = formatPhoneNumber(val);
    setFormData((formData) => ({ ...formData, contactPhone: formattedInputValue }));
  }

  const onChange4 = (val) => {
    setFormData((formData) => ({ ...formData, email: val }));
  }

  const onChange5 = (val) => {
    if (formData.billingAddress === formData.installationAddress) {
      setFormData((formData) => ({ ...formData, billingAddress: val }));
    }
    if (formData.ipPhoneAddress === formData.installationAddress) {
      setFormData((formData) => ({ ...formData, ipPhoneAddress: val }));
    }
    if (formData.cardRegistrationAddress === formData.installationAddress) {
      setFormData((formData) => ({ ...formData, cardRegistrationAddress: val }));
    }
    setFormData((formData) => ({ ...formData, installationAddress: val }));
  }

  const onChange6 = (val) => {
    setFormData((formData) => ({ ...formData, ipPhoneAddress: val }));
  }

  const onChange7 = (val) => {
    const formattedInputValue = formatPostalCode(val);
    setFormData((formData) => ({ ...formData, postalCode: formattedInputValue }));
  }

  const onChange8 = (val) => {
    setFormData((formData) => ({ ...formData, billingAddress: val }));
  }

  const onChange9 = (val) => {
    setFormData((formData) => ({ ...formData, city: val }));
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
              value={formData.firstName}
            />
          </Grid.Item>
          <Grid.Item span={2}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Last Name</p>
            <Input placeholder=''
              style={{ '--font-size':'15px' }}
              onChange={val => { onChange2(val) }}
              value={formData.lastName}
            />
          </Grid.Item>
          <Grid.Item span={4}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Phone Number</p>
            <Input placeholder=''
              style={{ '--font-size':'16px' }}
              onChange={val => { onChange3(val) }}
              value={formData.contactPhone}
            />
          </Grid.Item>
          <Grid.Item span={4}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Email</p>
            <Input placeholder=''
              style={{ '--font-size':'16px' }}
              onChange={val => { onChange4(val) }}
              value={formData.email}
            />
          </Grid.Item>
        </Grid>

        <Grid columns={6} style={{ '--gap-horizontal': '32px' }}>
          <Grid.Item span={6}>
            <Divider
              contentPosition='left'
              style={{ color: '#777777', fontSize: "18px", fontFamily: "'Oswald', sans-serif", marginBottom: '0px', marginTop: '0px', }}>
              Address Information
            </Divider>
          </Grid.Item>
          <Grid.Item span={6}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Installation Address</p>
            <Input placeholder='#Unit-Number Street'
              style={{ '--font-size':'16px' }}
              onChange={val => { onChange5(val) }}
              value={formData.installationAddress}
            />
          </Grid.Item>
          <Grid.Item span={6}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>E911 Address</p>
            <Input
              style={{ '--font-size':'16px' }}
              onChange={val => { onChange6(val) }}
              value={formData.ipPhoneAddress}
            />
          </Grid.Item>
          <Grid.Item span={4}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>City</p>
            <Picker
              columns={basicColumns}
              value={[formData.city]}
              onSelect={(val, extend) => {
                console.log('onSelect', val, extend.items);
                onChange9(val[0])
              }}
            >
              {(items, { open }) => {
                return (
                  <Space align='center'>
                    <Button onClick={open} style={{ color: '#777777', fontSize: 'inherit', }}>Select</Button>
                    {items.every(item => item === null)
                      ? 'unknown'
                      : items.map(item => item?.label ?? 'unknown').join(' - ')}
                  </Space>
                )
              }}
            </Picker>
          </Grid.Item>
          <Grid.Item span={2}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Postal Code</p>
            <Input
              style={{ '--font-size':'16px' }}
              onChange={val => { onChange7(val) }}
              value={formData.postalCode}
            />
          </Grid.Item>
          <Grid.Item span={6}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Billing Address</p>
            <Input
              style={{ '--font-size':'16px' }}
              onChange={val => { onChange8(val) }}
              value={formData.billingAddress}
            />
          </Grid.Item>
        </Grid>

      </Space>
    </>
  );
};

export default CustomerInfo;
