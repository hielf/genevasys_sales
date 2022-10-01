import React, { useState } from 'react'
// import 'antd-mobile/es/global'
// import Button from 'antd-mobile/es/components/button'
import { Space } from 'antd-mobile'
import HeaderTitle from '../Components/HeaderTitle'
import NextButton from '../Components/NextButton'
import PrevButton from '../Components/PreviousButton'

function OrderForm() {

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    products: [],
    productsDetail: [],
    tvBoxQty: 0,
    ipPhoneQty: 0,
    ipPhonePortIn: 1,
    ipPhonePortInNumber: "",
    ipPhoneAddressOption: 1,
    ipPhoneAddress: "",
    installationTime: 1,
    dateRequest: "",
    firstName: "",
    middleName: "",
    lastName: "",
    contactPhone: "",
    altPhone: "",
    email: "",
    installationAddress: "",
    city: "VANCOUVER",
    province: "BC",
    postalCode: "",
    optionsUnitType: 1,
    buzz: "",
    optionsSameAddress: 1,
    billingAddress: "",
    optionsCardType: 1,
    cardFirstName: "",
    cardLastName: "",
    cardNumber: "",
    mm: "",
    yy: "",
    cvv: "",
    firstInitialPayment: "",
    recurrentPayment: "",
    cardRegistrationAddress: "",
    checkAgreeMent: false,
    promoteCode: "",
    additionalRequirements: "",
    productAs: [],
    productBs: [],
    productCs: [],
    productDs: [],
    tvBoxQtySelected: 0,
    ipPhoneQtySelected: 0,
  });

  const FormTitles = ["Choose Product", "Service Time", "Customer Info", "Payment Info", "Review"];

  const NextButtonClick = () => {
    return <NextButton step={step} setStep={setStep} FormTitles={FormTitles} formData={formData} setFormData={setFormData} />;
  };

  // const PrevButtonClick = () => {
  //   return <PrevButton step={step} setStep={setStep} FormTitles={FormTitles} />;
  // };

  const HeaderTitleDisplay = () => {
    return <HeaderTitle step={step} FormTitles={FormTitles} />;
  };

  return (
    <>
      { HeaderTitleDisplay() }
      <Space direction='vertical'>
        <Space wrap>
          { NextButtonClick() }
        </Space>
      </Space>
    </>
  );
}


export default OrderForm;
