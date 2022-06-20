import React from 'react';
import { Layout, Divider, Space } from 'antd';
import { Row, Col } from 'antd';
import { GlobalOutlined, Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

const Summary = ({formData, setFormData}) => {

  return (
    <Typography>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Divider orientation="center">
          Customer Information
        </Divider>
        <Row justify="space-between center">
          <Col span={3}><span style={{fontWeight: 'bold', color: '#90BA75'}}>First Name:</span></Col>
          <Col span={5}>{ formData.firstName }</Col>
          <Col span={3}><span style={{fontWeight: 'bold'}}>Middle Name:</span></Col>
          <Col span={5}>{ formData.middleName }</Col>
          <Col span={3}><span style={{fontWeight: 'bold'}}>Last Name:</span></Col>
          <Col span={5}>{ formData.lastName }</Col>
        </Row>
        <Row justify="space-between center">
          <Col span={3}><span style={{fontWeight: 'bold'}}>Contact Phone:</span></Col>
          <Col span={5}>{ formData.contactPhone }</Col>
          <Col span={3}><span style={{fontWeight: 'bold'}}>Alt. Phone:</span></Col>
          <Col span={5}>{ formData.altPhone }</Col>
          <Col span={3}><span style={{fontWeight: 'bold'}}>E-mail:</span></Col>
          <Col span={5}>{ formData.email }</Col>
        </Row>
        <Row justify="space-between center">
          <Col span={3}><span style={{fontWeight: 'bold'}}>Installation Address:</span></Col>
          <Col span={21}>{ formData.installationAddress }</Col>
        </Row>
        <Row justify="space-between center">
          <Col span={3}><span style={{fontWeight: 'bold'}}>Unit Type:</span></Col>
          <Col span={5}>{ formData.unitType }</Col>
          <Col span={3}><span style={{fontWeight: 'bold'}}>Buzz #:</span></Col>
          <Col span={5}>{ formData.buzz }</Col>
        </Row>
        <Row justify="space-between center">
          <Col span={3}><span style={{fontWeight: 'bold'}}>City/Town:</span></Col>
          <Col span={5}>{ formData.city }</Col>
          <Col span={3}><span style={{fontWeight: 'bold'}}>Province:</span></Col>
          <Col span={5}>{ formData.province }</Col>
          <Col span={3}><span style={{fontWeight: 'bold'}}>Postal Code:</span></Col>
          <Col span={5}>{ formData.postalCode }</Col>
        </Row>
        <Row justify="space-between center">
          <Col span={3}><span style={{fontWeight: 'bold'}}>Billing Address:</span></Col>
          <Col span={21}>{ formData.billingAddress }</Col>
        </Row>

        <Divider orientation="center">
          Service Request
        </Divider>
        <Row justify="space-between center">
          <Col span={3}><span style={{fontWeight: 'bold'}}>Planed Date of Delivery:</span></Col>
          <Col span={5}>{ formData.installationTime }</Col>
          <Col span={3}><span style={{fontWeight: 'bold'}}>Date Request:</span></Col>
          <Col span={5}>{ formData.dateRequest.format('DD/MMM/YYYY') }</Col>
        </Row>

        <Divider orientation="center">
          Product Request
        </Divider>
        <Row justify="space-between center">
          <Col span={3}><span style={{fontWeight: 'bold'}}>Selected Products:</span></Col>
          <Col span={5}>{ formData.products }</Col>
        </Row>

        <Divider orientation="center">
          Pre-Authorized Payment Information
        </Divider>
        <Row justify="space-between center">
          <Col span={3}><span style={{fontWeight: 'bold'}}>Card Type:</span></Col>
          <Col span={5}>{ formData.optionsCardType }</Col>
        </Row>
        <Row justify="space-between center">
          <Col span={5}><span style={{fontWeight: 'bold'}}>Card Holder's First Name:</span></Col>
          <Col span={5}>{ formData.cardFirstName }</Col>
          <Col span={5}><span style={{fontWeight: 'bold'}}>Last Name:</span></Col>
          <Col span={5}>{ formData.cardLastName }</Col>
        </Row>
        <Row justify="space-between center">
          <Col span={5}><span style={{fontWeight: 'bold'}}>Credit Card Registration Address:</span></Col>
          <Col span={5}>{ formData.cardRegistrationAddress }</Col>
        </Row>
      </Space>
    </Typography>
  );
};

export default Summary;
