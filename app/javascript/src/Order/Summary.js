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
          <Col span={3}><span style={{fontWeight: 'bold'}}>First Name:</span></Col>
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
          <Col span={3}>City/Town:</Col>
          <Col span={5}>{ formData.city }</Col>
          <Col span={3}>Province:</Col>
          <Col span={5}>{ formData.province }</Col>
          <Col span={3}>Postal Code:</Col>
          <Col span={5}>{ formData.postalCode }</Col>
        </Row>
        <Row justify="space-between center">
          <Col span={3}>Billing Address:</Col>
          <Col span={21}>{ formData.billingAddress }</Col>
        </Row>

        <Divider orientation="center">
          Service Request
        </Divider>
        <Row justify="space-between center">
          <Col span={3}>Planed Date of Delivery:</Col>
          <Col span={5}>{ formData.installationTime }</Col>
          <Col span={3}>Date Request:</Col>
          <Col span={5}>{ formData.dateRequest }</Col>
        </Row>
      </Space>
    </Typography>
  );
};

export default Summary;
