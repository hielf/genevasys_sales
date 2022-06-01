import React from 'react';
import { Space, Layout, List, Typography, Divider, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import { Button, Radio } from 'antd';
import NextButton from '../Components/NextButton'
import PrevButton from '../Components/PreviousButton'

const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph, Text, Link } = Typography;

const onChange = (checkedValues) => {
  console.log('checked = ', checkedValues);
};

const optionsInternet = [
  {
    label: 'Internet 75: $55.95/month',
    value: 'A1',
  },
  {
    label: 'Internet 300: $85.95/month',
    value: 'A2',
  },
  {
    label: 'Internet 750: $105.95/month',
    value: 'A3',
  },
  {
    label: 'Internet 750: $105.95/month',
    value: 'A4',
  },
  {
    label: 'Internet 750: $105.95/month',
    value: 'A5',
  },
  {
    label: 'Internet 750: $105.95/month',
    value: 'A6',
  },
];

const OrderForm = () => (
  <>
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ backgroundColor: "#69c0ff", }}>
        <Divider style={{ color: "#ffffff", borderTopColor: "#69c0ff", }}>Service Request</Divider>
      </Header>
      <Content style={{ padding: '0 50px', backgroundColor:"#ffffff" }}>
        <Divider orientation="left">Bundle</Divider>
        <Checkbox.Group options={optionsInternet} onChange={onChange} />
        <br />
        <Divider orientation="left">Internet</Divider>
        <Checkbox.Group options={optionsInternet} onChange={onChange} />
        <br />
        <Divider orientation="left">TV Box</Divider>
        <Checkbox.Group options={optionsInternet} onChange={onChange} />
        <br />
        <Divider orientation="left">IP Phone</Divider>
        <Checkbox.Group options={optionsInternet} onChange={onChange} />
        <br />
        <br />
        <Row>
          <Col span={6}></Col>
          <Col span={5}>{
            <PrevButton
            /> }
          </Col>
          <Col span={2}></Col>
          <Col span={5}>{
            <NextButton
            /> }
          </Col>
          <Col span={6}></Col>
        </Row>

      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor:"#ffffff" }}> ©2022 Geneva Systems Ltd.</Footer>
    </Layout>

  </>
);

export default OrderForm;
