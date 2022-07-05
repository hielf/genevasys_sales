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
import AgreeMent from './AgreeMent'
import ResultForm from './ResultForm'

function OrderForm() {
  const { Header, Footer, Sider, Content } = Layout;
  const { Title, Paragraph, Text, Link } = Typography;
  const [step, setStep] = useState(3);
  const [formData, setFormData] = useState({
    products: ['B7', 'D111', 'A1', 'C9'],
    productsDetail: [[{label: 'Internet 750: $105.95/month', value: 'B7', price: 525.95}],[{label: 'IP Phone Rental: 10.95/month', value: 'D111', price: 15.95}],[{label: 'Internet + TV Box + IP Phone 75: $55.95/month', value: 'A1', price: 55.95}],[{label: 'Rent Box 75: $10.00/month', value: 'C9', price: 15.95}]],
    tvBoxQty: 2,
    ipPhoneQty: 3,
    ipPhonePortIn: 1,
    ipPhonePortInNumber: "435423642",
    ipPhoneAddressOption: 1,
    ipPhoneAddress: "8600 Kelmore Rd",
    installationTime: 1,
    dateRequest: "",
    firstName: "zishi",
    middleName: "",
    lastName: "mm",
    contactPhone: "5776542",
    altPhone: "",
    email: "fdsaf@gmds.com",
    installationAddress: "8600 Kelmore Rd",
    city: "VANCOUVER",
    province: "BC",
    postalCode: "v2gc5s",
    optionsUnitType: 1,
    buzz: "",
    optionsSameAddress: 1,
    billingAddress: "8600 Kelmore Rd",
    optionsCardType: 1,
    cardFirstName: "zisg",
    cardLastName: "mou",
    cardNumber: "543643765763",
    mm: "11",
    yy: "22",
    cvv: "543",
    firstInitialPayment: "",
    recurrentPayment: "",
    cardRegistrationAddress: "8600 Kelmore Rd",
    checkAgreeMent: true,
    promoteCode: "32432",
    additionalRequirements: "need more and more",
  });

  const FormTitles = ["Choose Product", "Service Time", "Customer Info", "Payment Info", "Review"];

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
      return <PaymentInfo formData={formData} setFormData={setFormData} />;
    } else if (step === 4) {
      return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Summary formData={formData} setFormData={setFormData} />
          <div/>
          <AgreeMent formData={formData} setFormData={setFormData} />
        </Space>
      )
    } else if (step === 5) {
      return <Submit formData={formData} setFormData={setFormData} />;
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
