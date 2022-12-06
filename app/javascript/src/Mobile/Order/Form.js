import React, { useState } from 'react'
// import 'antd-mobile/es/global'
// import Button from 'antd-mobile/es/components/button'
import { Space, SafeArea, Grid } from 'antd-mobile'
import HeaderTitle from '../Components/HeaderTitle'
import NextButton from '../Components/NextButton'
import PrevButton from '../Components/PreviousButton'
import { formDataInit } from '../Components/FormDataUtil'
import Bubble from '../Components/FloatingBubble'
import ProductInfo from './ProductInfo'
import ServiceInfo from './ServiceInfo'
import CustomerInfo from './CustomerInfo'
import PaymentInfo from './PaymentInfo'
import Summary from './Summary'

function OrderForm() {

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(formDataInit);

  const FormTitles = ["Product", "Time", "Cust", "Bill", "Recap"];

  const NextButtonClick = () => {
    return <NextButton step={step} setStep={setStep} FormTitles={FormTitles} formData={formData} setFormData={setFormData} />;
  };

  const PrevButtonClick = () => {
    return <PrevButton step={step} setStep={setStep} FormTitles={FormTitles} />;
  };

  const HeaderTitleDisplay = () => {
    return <HeaderTitle step={step} FormTitles={FormTitles} />;
  };

  const PageDisplay = () => {
    if (step === 0) {
      return <ProductInfo formData={formData} setFormData={setFormData} />;
    } else if (step === 1) {
      return <ServiceInfo formData={formData} setFormData={setFormData} />;
    } else if (step === 2) {
      return <CustomerInfo formData={formData} setFormData={setFormData} />;
    }  else if (step === 3) {
      return <PaymentInfo formData={formData} setFormData={setFormData} />;
    } else if (step === 4) {
      return <Summary formData={formData} setFormData={setFormData} />;
    }  else if (step === 5) {
      return <Submit formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <>
      { Bubble() }
      { HeaderTitleDisplay() }
      <div style={{ width: '100%', }}>
        <Space direction='vertical' style={ {padding: '0 5%', width: '90%', marginTop: 100, marginBottom: 120, '--gap': '24px'} }>
          <div/>
          { PageDisplay() }
        </Space>
      </div>
      <div style={{ backgroundColor: "white", position: 'fixed', zIndex: 1, width: '100%', bottom: '0px', boxShadow: '0px -2px 5px 0px #e6e6e6', WebkitBoxShadow: '0px -2px 5px 0px #e6e6e6', MozBoxShadow: '0px -2px 5px 0px #e6e6e6', }}>
        <Space direction='vertical' style={ {padding: '0 5%', width: '90%', marginTop: 85, '--gap': '24px'} }>
          <div style={ {position: 'fixed', bottom: '24px', width: '90%', marginRight: 'auto', marginLeft: 'auto', } }>
            <Grid columns={3} gap={8}>
              <Grid.Item>
                { PrevButtonClick() }
              </Grid.Item>
              <Grid.Item span={2}>
                { NextButtonClick() }
              </Grid.Item>
            </Grid>
          </div>
        </Space>
      </div>
    </>
  );
}


export default OrderForm;
