import React, { useState } from 'react';
import { Space, Layout, List, Typography, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import { Button, Radio } from 'antd';
import HeaderTitle from '../Components/HeaderTitle'
import ProgressBar from '../Components/ProgressBar'
import AlertBar from '../Components/Alert'
import NextButton from '../Components/NextButton'
import PrevButton from '../Components/PreviousButton'
import ProductInfo from './ProductInfo'
import ServiceInfo from './ServiceInfo'
import CustomerInfo from './CustomerInfo'
import PaymentInfo from './PaymentInfo'

function OrderForm() {
  const { Header, Footer, Sider, Content } = Layout;
  const { Title, Paragraph, Text, Link } = Typography;
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    products: [],
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
    unitType: "",
    buzz: "",
    optionsSameAddress: 1,
    billingAddress: "",
  });

  const FormTitles = ["Service Request", "Service Time", "Customer Info", "Payment Info"];

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
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ backgroundColor: "#90BA75", position: 'fixed', zIndex: 1, width: '100%', }}>
          { HeaderTitleDisplay() }
        </Header>
        <Content style={{ padding: '0 50px', backgroundColor:"#ffffff", marginTop: 64 }}>
          {
            // AlertDisplay()
          }
          { PageDisplay() }
          <br />
          <br />
          <br />
        </Content>
        <Content style={{ backgroundColor:"#ffffff", }}>
          <Row gutter={[16, 16]} justify="center">
            <Col span={8}>{ PrevButtonClick() }</Col>
            <Col span={8}>{ NextButtonClick() }</Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor:"#ffffff" }}> ©2022 Geneva Systems Ltd.</Footer>
      </Layout>
    </>

  );
}


export default OrderForm;
