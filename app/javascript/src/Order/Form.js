import React, { useState } from 'react';
import {isMobile} from 'react-device-detect';
import { Space, Layout, Typography } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import HeaderTitle from '../Components/HeaderTitle'
import ProgressBar from '../Components/ProgressBar'
import AlertBar from '../Components/Alert'
import NextButton from '../Components/NextButton'
import PrevButton from '../Components/PreviousButton'
import ProductInfo from './ProductInfo'
import ServiceInfo from './ServiceInfo'
import CustomerInfo from './CustomerInfo'
import PaymentInfo from './PaymentInfo'
import Summary from './Summary'

function OrderForm() {
  const { Header, Footer, Sider, Content } = Layout;
  const { Title, Paragraph, Text, Link } = Typography;
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
    cardRegistrationAddress: ""
  });

  const FormTitles = ["Service Request", "Service Time", "Customer Info", "Payment Info", "Review"];

  const NextButtonClick = () => {
    return <NextButton step={step} setStep={setStep} FormTitles={FormTitles} formData={formData} />;
  };

  const PrevButtonClick = () => {
    return <PrevButton step={step} setStep={setStep} FormTitles={FormTitles} />;
  };

  const PageDisplay = () => {
    if (step === 0) {
      return <ProductInfo formData={formData} setFormData={setFormData} />;
    } else if (step === 1) {
      return <ServiceInfo formData={formData} setFormData={setFormData} />;
    } else if (step === 2) {
      return <CustomerInfo formData={formData} setFormData={setFormData} />;
    } else if (step === 3) {
      return <PaymentInfo formData={formData} setFormData={setFormData} />;;
    } else if (step === 4) {
      return <Summary formData={formData} setFormData={setFormData} />;;
    }
  };

  const HeaderTitleDisplay = () => {
    return <HeaderTitle step={step} FormTitles={FormTitles} />;
  };

  const ProgressDisplay = () => {
    return <ProgressBar progress={step} FormTitles={FormTitles} />;
  };

  const AlertDisplay = () => {
    return <AlertBar />;
  };

  return (
    <>
      <Layout style={{ minHeight: "100vh", backgroundColor:"#ffffff", }}>
        <Header style={{ backgroundColor: "#90BA75", position: 'fixed', zIndex: 1, width: '100%', }}>
          { HeaderTitleDisplay() }
        </Header>
        <Space direction="vertical" size="large" style={{ display: 'flex', }}>
          <Content style={
            isMobile ? {
               padding: '0 50px', marginTop: 64
            } : {
               padding: '0 17.5%', marginTop: 64
            }
          }>
            {
              // AlertDisplay()
            }
            { PageDisplay() }
          </Content>
          <div />
          <Content>
            <Row justify="space-evenly center">
              <Col span={2}></Col>
              <Col span={6}>{ PrevButtonClick() }</Col>
              <Col span={6}>{ NextButtonClick() }</Col>
              <Col span={2}></Col>
            </Row>
          </Content>
        </Space>
        <Footer style={{ textAlign: 'center', backgroundColor:"#ffffff" }}>
          {!isMobile ? ('©2022 Geneva Systems Ltd.') : null}
        </Footer>
      </Layout>
    </>

  );
}


export default OrderForm;
