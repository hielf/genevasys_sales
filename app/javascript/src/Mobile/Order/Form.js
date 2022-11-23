import React, { useState } from 'react'
// import 'antd-mobile/es/global'
// import Button from 'antd-mobile/es/components/button'
import { Space, SafeArea, Grid } from 'antd-mobile'
import HeaderTitle from '../Components/HeaderTitle'
import NextButton from '../Components/NextButton'
import PrevButton from '../Components/PreviousButton'
import ProductInfo from './ProductInfo'
import ServiceInfo from './ServiceInfo'
import CustomerInfo from './CustomerInfo'
import PaymentInfo from './PaymentInfo'
import Summary from './Summary'

function OrderForm() {

  const [step, setStep] = useState(3);
  const [formData, setFormData] = useState({
    products: ['67', '76', '78'],
    productsDetail: [{id: 223, value: '67', label: 'Internet 75M + TV', description: 'Package Monthly (Internet 75M / Music TV Box)', price: 57.95, promotion_price: 57.95, tag: ['B1000', 'C', 'D', 'E', 'F'], value: "19"},{id: 243, value: '76', label: 'Installation fee', description: 'Installation Service fee', price: 100, promotion_price: 100, tag: ['E'], value: "76"}, {id: 244, value: '78', label: 'Rebate for Installation', description: 'Installation rebate $10/m for 12 months', price: -10, promotion_price: -10, tag: ['F'], value: "78"}],
    tvBoxQty: 0,
    ipPhoneQty: 0,
    ipPhonePortIn: 1,
    ipPhonePortInNumber: "435423642",
    ipPhoneAddressOption: 1,
    ipPhoneAddress: "8600 Kelmore Rd",
    installationTime: 1,
    dateRequest: "",
    firstName: "zishi",
    middleName: "",
    lastName: "mm",
    contactPhone: "(904) 328-4903",
    altPhone: "",
    email: "fdsaf@gmds.com",
    installationAddress: "8600 Kelmore Rd",
    city: "VANCOUVER",
    province: "BC",
    postalCode: "FDE FEW",
    optionsUnitType: 1,
    buzz: "",
    optionsSameAddress: 1,
    billingAddress: "8600 Kelmore Rd",
    optionsCardType: 1,
    cardFirstName: "zisg",
    cardLastName: "mou",
    cardNumber: "8595 8238 4732 7483",
    mm: "11",
    yy: "2024",
    cvv: "543",
    firstInitialPayment: "",
    recurrentPayment: "",
    cardRegistrationAddress: "8600 Kelmore Rd",
    checkAgreeMent: false,
    promoteCode: "32432",
    additionalRequirements: "need more and more",
    productAs: [],
    productBs: [],
    productCs: [],
    productDs: [],
    tvBoxQtySelected: 0,
    ipPhoneQtySelected: 0,
    popupVisible: false,
  });

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
      return (
        <Summary formData={formData} setFormData={setFormData} />

      )
    }//  else if (step === 5) {
    //   return <Submit formData={formData} setFormData={setFormData} />;
    // }
  };

  return (
    <>
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
