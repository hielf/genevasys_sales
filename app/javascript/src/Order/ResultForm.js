import React, { useState, useRef } from 'react';
import {isMobile} from 'react-device-detect';
import { Space, Layout, Typography } from 'antd';
import { Row, Col } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import HeaderTitle from '../Components/HeaderTitle'
import ReactToPrint, { PrintContextConsumer, useReactToPrint } from 'react-to-print';
import { SummaryPrintTemplate } from './Summary'

const ResultForm = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const HeaderTitleDisplay = () => {
    return <HeaderTitle step={-1} FormTitles={""} />;
  };

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
            <Result
              icon={<SmileOutlined />}
              title="Great, we have done all the operations!"
              extra={
                <Button type='primary' size='large' onClick={handlePrint}>Print this out</Button>
              }
            />
          </Content>
          <div />
        </Space>
        <Footer style={{ textAlign: 'center', backgroundColor:"#ffffff" }}>
          {!isMobile ? ('©2022 Geneva Systems Ltd.') : null}
        </Footer>
      </Layout>
      <div style={{ overflow: 'hidden', height: '0' }}>
        <SummaryPrintTemplate ref={componentRef} formData={formData} setFormData={setFormData} />
      </div>
    </>
  );
}


export default ResultForm;
