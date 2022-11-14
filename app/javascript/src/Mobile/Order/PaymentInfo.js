import React, { useState } from 'react';
import { Grid, Space } from 'antd-mobile'
import { Form, Input, Divider, Picker, Button, Radio, NumberKeyboard } from 'antd-mobile'
import { formatCardNumber, formatNumberOnly } from '../Functions/FormFormater'
import { LockFill } from 'antd-mobile-icons'

const PaymentInfo = ({formData, setFormData}) => {

  const [visible, setVisible] = useState('')

  const openKeyboard = (name) => {
    setVisible(name)
    document.activeElement.scrollIntoViewIfNeeded();
  }

  const actions = {
    onClose: () => {
      setVisible('')
    },
    onInput: (key) => {},
    onDelete: () => {},
  }

  const onInput = (value) => {
    if (visible === 'cvv') {
      if (formData.cvv.length < 3) {
        setFormData((formData) => ({ ...formData, cvv: formData.cvv + value }));
      }
      if (formData.cvv.length === 2) {
        setVisible('')
      }
    } else if (visible === 'cardNumber') {
      if (formData.cardNumber.length < 19) {
        // setFormData((formData) => ({ ...formData, cvv: formData.cvv + value }));

        const formattedInputValue = formatCardNumber(formData.cardNumber + value);
        setFormData((formData) => ({ ...formData, cardNumber: formattedInputValue }));
      }
      if (formData.cardNumber.length === 18) {
        setVisible('')
      }
    }
  }

  const onDelete = () => {
    if (visible === 'cvv') {
      setFormData((formData) => ({ ...formData, cvv: formData.cvv.slice(0, formData.cvv.length - 1) }));
    } else if (visible === 'cardNumber') {
      const formattedInputValue = formatCardNumber(formData.cardNumber.slice(0, formData.cardNumber.length - 1));
      setFormData((formData) => ({ ...formData, cardNumber: formattedInputValue }));
    }
  }

  var year = (new Date()).getFullYear();
  // var month = d.getMonth();
  // var day = d.getDate();
  // var c = new Date(year + 15, month, day);
  const years = Array.from({length: 30}, (_, i) => ( {label: (year + i).toString(), value: (year + i).toString()} ))
  const months = [{ label: '01', value: '01' },
                  { label: '02', value: '02' },
                  { label: '03', value: '03' },
                  { label: '04', value: '04' },
                  { label: '05', value: '05' },
                  { label: '06', value: '06' },
                  { label: '07', value: '07' },
                  { label: '08', value: '08' },
                  { label: '09', value: '09' },
                  { label: '10', value: '10' },
                  { label: '11', value: '11' },
                  { label: '12', value: '12' },]

  const timeColumns = [months, years,]

  const onChange0 = (val) => {
    setFormData((formData) => ({ ...formData, optionsCardType: val }));
  }

  const onChange1 = (val) => {
    setFormData((formData) => ({ ...formData, cardFirstName: val }));
  }

  const onChange2 = (val) => {
    setFormData((formData) => ({ ...formData, cardLastName: val }));
  }

  const onChange3 = (val) => {
    const formattedInputValue = formatCardNumber(val);
    setFormData((formData) => ({ ...formData, cardNumber: formattedInputValue }));
  }

  const onChange4 = (mm, yy) => {
    setFormData((formData) => ({ ...formData, mm: mm }));
    setFormData((formData) => ({ ...formData, yy: yy }));
  }

  // const onChange5 = (val) => {
  //   setFormData((formData) => ({ ...formData, yy: val }));
  // }

  const onChange6 = (val) => {
    const formattedInputValue = formatCardNumber(val);
    setFormData((formData) => ({ ...formData, cvv: formattedInputValue }));
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
              Credit Card Infomation
            </Divider>
          </Grid.Item>
          <Grid.Item span={3}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Holder's First Name</p>
            <Input placeholder=''
              style={{ '--font-size':'15px', }}
              onChange={val => { onChange1(val) }}
              value={formData.cardFirstName}
              onClick={() => setVisible('')}
            />
          </Grid.Item>
          <Grid.Item span={3}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Last Name</p>
            <Input placeholder=''
              style={{ '--font-size':'15px' }}
              onChange={val => { onChange2(val) }}
              value={formData.cardLastName}
              onClick={() => setVisible('')}
            />
          </Grid.Item>
          <Grid.Item span={6}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Card Number <LockFill fontSize={12} color='#777777'/></p>
            <Input placeholder=''
              style={{ '--font-size':'16px' }}
              // onChange={val => { onChange3(val) }}
              onFocus={e => e.target.blur()}
              onClick={() => openKeyboard('cardNumber')}
              value={formData.cardNumber}
            />
          </Grid.Item>
          <Grid.Item span={4}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Expiry Date</p>
            <Picker
              columns={timeColumns}
              value={[formData.mm, formData.yy]}
              onSelect={(val, extend) => {
                console.log('onSelect', val, extend.items);
                onChange4(val[0], val[1])
              }}
            >
              {(items, { open }) => {
                return (
                  <Space align='center'>
                    <Button
                    onClick={() => { setVisible(''); open(); }}
                    style={{ color: '#777777', fontSize: '17px', }}>Select</Button>
                    {items.every(item => item === null)
                      ? 'unknown'
                      : items.map(item => item?.label ?? 'unknown').join(' / ')}
                  </Space>
                )
              }}
            </Picker>
          </Grid.Item>
          <Grid.Item span={2}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>CVV <LockFill fontSize={12} color='#777777'/></p>
            <Input placeholder='###'
              style={{ '--font-size':'16px' }}
              // onChange={val => { onChange6(val) }}
              onFocus={e => e.target.blur()}
              onClick={() => openKeyboard('cvv')}
              value={formData.cvv}
              maxLength={3}
            />
          </Grid.Item>
          <Grid.Item span={6}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Credit Card Type</p>
            <Radio.Group onChange={onChange0} value={formData.optionsCardType} defaultValue={1}>
              <Space direction='horizontal' style={{ '--gap-horizontal': '18px', }}>
                <Radio value={1} onChange={() => setVisible('')} style={{'--icon-size': '16px', '--font-size': '17px', '--gap': '6px', color: '#777777',}}>VISA</Radio>
                <Radio value={2} onChange={() => setVisible('')} style={{'--icon-size': '16px', '--font-size': '17px', '--gap': '6px', color: '#777777',}}>MasterCard</Radio>
                <Radio value={3} onChange={() => setVisible('')} style={{'--icon-size': '16px', '--font-size': '17px', '--gap': '6px', color: '#777777',}}>UnionPay</Radio>
              </Space>
            </Radio.Group>
          </Grid.Item>
          <Grid.Item span={6}>
            <p style={{ marginBottom: '5px', fontFamily: "'Varela Round', sans-serif", }}>Card Registration Address</p>
            <Input placeholder=''
              style={{ '--font-size':'16px' }}
              onChange={val => { onChange7(val) }}
              value={formData.cardRegistrationAddress}
              onClick={() => setVisible('')}
            />
          </Grid.Item>
        </Grid>

      </Space>
      <NumberKeyboard
        visible={visible === 'cvv'}
        onClose={actions.onClose}
        onInput={onInput}
        onDelete={onDelete}
        showCloseButton={true}
        confirmText='Confirm'
      />
      <NumberKeyboard
        visible={visible === 'cardNumber'}
        onClose={actions.onClose}
        onInput={onInput}
        onDelete={onDelete}
        showCloseButton={true}
        confirmText='Confirm'
      />
    </>
  );
};

export default PaymentInfo;
