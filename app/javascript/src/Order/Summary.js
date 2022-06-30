import React, { Component } from 'react';
import { Layout, Divider, Space } from 'antd';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { GlobalOutlined, Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

const Summary = ({formData, setFormData}) => {
  const labelStyle = { fontWeight: 'bold', color: '#90BA75', };
  const dataStyle = { textDecoration: 'underline', };
  const labelStyleSmall = { fontWeight: 'bold', color: '#90BA75', fontSize: '10px', };
  const dataStyleSmall = { textDecoration: 'underline', fontSize: '10px', };
  const boldStyle = { fontWeight: 'bold', };

  const UnitType = (optionsUnitType) => {
    if (optionsUnitType === 1) {
      return ("Main")
    } else if (optionsUnitType === 2) {
      return ("Basement")
    } else if (optionsUnitType === 3) {
      return ("Unit")
    }
  };

  const InstallationTime = (installationTime) => {
    if (installationTime === 1) {
      return ("8am-12am")
    } else if (installationTime === 2) {
      return ("12pm-4pm")
    }
  };

  const CardType = (optionsCardType) => {
    if (optionsCardType === 1) {
      return ("VISA")
    } else if (optionsCardType === 2) {
      return ("MasterCard")
    } else if (optionsCardType === 3) {
      return ("UnionPay")
    }
  };

  const IpPhonePortIn = (ipPhonePortIn) => {
    if (ipPhonePortIn === 1) {
      return ("NEW")
    } else if (ipPhonePortIn === 2) {
      return ("Port in")
    }
  };

  const IpPhoneAddress = (ipPhoneAddressOption) => {
    if (ipPhoneAddressOption === 1) {
      return ("SAME AS INSTALLATION ADDRESS")
    } else if (ipPhoneAddressOption === 2) {
      return (formData.ipPhoneAddress)
    }
  };

  const QtyDisplay = (product) => {
    if (product.value.includes("C")) {
      return (
        <div>
          <span>Qty: </span>
          <span>
            { formData.tvBoxQty }
          </span>
        </div>
      )
    }

    if (product.value.includes("D")) {
      return (
        <div>
          <span>Qty: </span>
          <span>
            { formData.ipPhoneQty }
          </span>
        </div>
      )
    }
  };

  const ProductsQtyDisplay = (products) => {
    return (
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        {products.map((product, index) => {
          return (
            <Row justify="space-between center" key={ product[0].value }>
              <Col span={15}>
                <span style={ labelStyle }>· </span>
                <span>{ product[0].label }</span>
              </Col>
              <Col span={5}>
                {QtyDisplay(product[0])}
              </Col>
              <Col span={4}>
                <span>${ product[0].price }</span>
              </Col>
            </Row>
          )
        })}
        <Row justify="space-between center">
          <Col span={20}>
            <span style={ labelStyle }>Total(excl.tax):</span>
          </Col>
          <Col span={4}>
            <span style={ boldStyle }>${ products.map((item) => parseFloat(item[0]['price']) || 0).reduce((a, b) => a + b).toFixed(2) }</span>
          </Col>
        </Row>
        <Row justify="space-between center">
          <Col span={20}>
            <span style={ labelStyle }>Total GST/5%:</span>
          </Col>
          <Col span={4}>
            <span style={ boldStyle }>${ (products.map((item) => parseFloat(item[0]['price']) || 0).reduce((a, b) => a + b)*0.05).toFixed(2) }</span>
          </Col>
        </Row>
        <Row justify="space-between center">
          <Col span={20}>
            <span style={ labelStyle }>Total PST(BC)/7%:</span>
          </Col>
          <Col span={4}>
            <span style={ boldStyle }>${ (products.map((item) => parseFloat(item[0]['price']) || 0).reduce((a, b) => a + b)*0.07).toFixed(2) }</span>
          </Col>
        </Row>
        <Row justify="space-between center">
          <Col span={20}>
            <span style={ labelStyle }>Total(inc.tax):</span>
          </Col>
          <Col span={4}>
            <span style={ boldStyle }>${ (products.map((item) => parseFloat(item[0]['price']) || 0).reduce((a, b) => a + b)*1.12).toFixed(2) }</span>
          </Col>
        </Row>
      </Space>
    )
  };

  const IpPhoneInfoDisplay = () => {
    if (formData.ipPhoneQty > 0) {
      return (
        <Card>
          <Row justify="space-between center">
            <Col span={8}>
              <Space direction='horizontal' size='small' >
                <span style={labelStyleSmall}>IP Phone:</span>
                <span style={dataStyleSmall}>{ IpPhonePortIn(formData.ipPhonePortIn) }</span>
              </Space>
            </Col>
            <Col span={16}>
              <Space direction='horizontal' size='small' >
                <span style={labelStyleSmall}>Port In Number:</span>
                <span style={dataStyleSmall}>{ formData.ipPhonePortInNumber }</span>
              </Space>
            </Col>
          </Row>
          <Row justify="space-between center">
            <Col span={24}>
              <Space direction='horizontal' size='small' >
                <span style={labelStyleSmall}>Address:</span>
                <span style={dataStyleSmall}>{ IpPhoneAddress(formData.ipPhoneAddressOption) }</span>
              </Space>
            </Col>
          </Row>
        </Card>
      )
    }
  };

  return (
    <Typography>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Divider orientation="center">
          Customer Information
        </Divider>
        <Row justify="space-between center">
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={labelStyle}>First Name:</span>
              <span style={dataStyle}>{ formData.firstName }</span>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={labelStyle}>Middle Name:</span>
              <span style={dataStyle}>{ formData.middleName }</span>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={labelStyle}>Last Name:</span>
              <span style={dataStyle}>{ formData.lastName }</span>
            </Space>
          </Col>
        </Row>
        <Row justify="space-between center">
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={labelStyle}>Contact Phone:</span>
              <span style={dataStyle}>{ formData.contactPhone }</span>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={labelStyle}>Alt. Phone:</span>
              <span style={dataStyle}>{ formData.altPhone }</span>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={labelStyle}>E-mail:</span>
              <span style={dataStyle}>{ formData.email }</span>
            </Space>
          </Col>
        </Row>
        <Row justify="space-between center">
          <Col span={24}>
            <Space direction='horizontal' size='small' >
              <span style={labelStyle}>Installation Address:</span>
              <span style={dataStyle}>{ formData.installationAddress }</span>
            </Space>
          </Col>
        </Row>
        <Row justify="space-between center">
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={labelStyle}>Unit Type:</span>
              <span style={dataStyle}>{ UnitType(formData.optionsUnitType) }</span>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={labelStyle}>Buzz #:</span>
              <span style={dataStyle}>{ formData.buzz }</span>
            </Space>
          </Col>
        </Row>
        <Row justify="space-between center">
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={labelStyle}>City/Town:</span>
              <span style={dataStyle}>{ formData.city }</span>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={labelStyle}>Province:</span>
              <span style={dataStyle}>{ formData.province }</span>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={labelStyle}>Postal Code:</span>
              <span style={dataStyle}>{ formData.postalCode }</span>
            </Space>
          </Col>
        </Row>
        <Row justify="space-between center">
          <Col span={24}>
            <Space direction='horizontal' size='small' >
              <span style={labelStyle}>Billing Address:</span>
              <span style={dataStyle}>{ formData.billingAddress }</span>
            </Space>
          </Col>
        </Row>

        <Divider orientation="center">
          Product Request
        </Divider>
        { ProductsQtyDisplay(formData.productsDetail) }
        { IpPhoneInfoDisplay() }

        <Divider orientation="center">
          Service Request
        </Divider>
        <Row justify="space-between center">
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={labelStyle}>Preferred delivery Time:</span>
              <span style={dataStyle}>{ InstallationTime(formData.installationTime) }</span>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={labelStyle}>Planed Date:</span>
              <span style={dataStyle}>{ formData.dateRequest !== "" ? formData.dateRequest.format('DD/MMM/YYYY') : "" }</span>
            </Space>
          </Col>
        </Row>

        <Divider orientation="center">
          Pre-Authorized Payment Information
        </Divider>
        <Row justify="space-between center">
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={labelStyle}>Card Type:</span>
              <span style={dataStyle}>{ CardType(formData.optionsCardType) }</span>
            </Space>
          </Col>
        </Row>
        <Row justify="space-between center">
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={labelStyle}>Card Holder's First Name:</span>
              <span style={dataStyle}>{ formData.cardFirstName }</span>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={labelStyle}>Last Name:</span>
              <span style={dataStyle}>{ formData.cardLastName }</span>
            </Space>
          </Col>
        </Row>
        <Row justify="space-between center">
          <Col span={24}>
            <Space direction='horizontal' size='small' >
              <span style={labelStyle}>Card Number:</span>
              <span style={dataStyle}>{ formData.cardNumber }</span>
            </Space>
          </Col>
        </Row>
        <Row justify="space-between center">
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={labelStyle}>Expiry Date:</span>
              <span style={dataStyle}>{ formData.mm }/{ formData.yy }</span>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={labelStyle}>CVV:</span>
              <span style={dataStyle}>{ "***" }</span>
            </Space>
          </Col>
        </Row>
        <Row justify="space-between center">
          <Col span={24}>
            <Space direction='horizontal' size='small' >
              <span style={labelStyle}>Credit Card Registration Address:</span>
              <span style={dataStyle}>{ formData.cardRegistrationAddress }</span>
            </Space>
          </Col>
        </Row>
      </Space>
    </Typography>
  );
};

export default Summary;

export const SummaryPrintTemplate = class SummaryPrintTemplate extends Component {
  render() {
    const formData = this.props.formData

    const printTable = (
      <div style={{ padding: '0 17.5%', marginTop: 64 }}>
        <Summary formData={formData}/>
      </div>
    );

    return printTable;
  }
};
