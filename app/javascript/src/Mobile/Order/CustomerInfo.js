import React, { useState } from 'react';
import { Grid, Space } from 'antd-mobile'
import { Form, Input, Divider, Picker, Button } from 'antd-mobile'

const CustomerInfo = ({formData, setFormData}) => {

  const [city, setCity] = useState('')

  const basicColumns = [
    [
      { label: '周一', value: 'Mon' },
      { label: '周二', value: 'Tues' },
      { label: '周三', value: 'Wed' },
      { label: '周四', value: 'Thur' },
      { label: '周五', value: 'Fri' },
    ],
    [
      { label: '上午', value: 'am' },
      { label: '下午', value: 'pm' },
    ],
  ]

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
            <Input placeholder='#Unit-Number Street'
              style={{ '--font-size':'16px' }}
              onChange={val => { onChange5(val) }}
            />
          </Grid.Item>
          <Grid.Item span={4}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>E911 Address</p>
            <Input
              style={{ '--font-size':'16px' }}
              onChange={val => { onChange6(val) }}
            />
          </Grid.Item>
          <Grid.Item span={2}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>City</p>
            <Picker
              columns={basicColumns}
              onSelect={(val, extend) => {
                console.log('onSelect', val, extend.items)
              }}
            >
              {(items, { open }) => {
                return (
                  <Space align='center'>
                    <Button onClick={open} style={{ fontSize: 'inherit' }}>Select</Button>
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
              minLength={6}
              maxLength={7}
              style={{ '--font-size':'16px' }}
              onChange={val => { onChange6(val) }}
            />
          </Grid.Item>
          <Grid.Item span={4}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Billing Address</p>
            <Input
              style={{ '--font-size':'16px' }}
              onChange={val => { onChange5(val) }}
            />
          </Grid.Item>
        </Grid>

      </Space>
    </>
  );
};

export default CustomerInfo;
