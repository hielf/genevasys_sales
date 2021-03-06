import React, { Component } from 'react';
import { Layout, Divider, Space } from 'antd';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { GlobalOutlined, Typography } from 'antd';
import { Descriptions } from 'antd';
import * as moment from 'moment';
const { Title, Paragraph, Text, Link } = Typography;
import {labelStyle, dataStyle, labelStyleSmall, dataStyleSmall, boldStyle, dividerStyle} from '../Components/FormStyle'

const Summary = ({formData, setFormData}) => {

  const currentDate = moment().format("DD-MMMM-YY");

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

  const AdditionalRequirements = (additionalRequirements) => {
    if (additionalRequirements.trim() !== "") {
      return (<Descriptions.Item label="Additional Requirements:" span={3}>{ formData.additionalRequirements }</Descriptions.Item>)
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
      <Space direction="vertical" size="size" style={{ display: 'flex' }}>
        {products.map((product, index) => {
          return (
            <Row justify="space-between center" key={ product[0].value }>
              <Col span={15}>
                <span style={ labelStyle }>?? </span>
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
      </Space>
    )
  };

  const ProductsSubtotalDisplay = (products) => {
    return (
      <Space direction="vertical" size="size" style={{ display: 'flex' }}>
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
        <Card small="small">
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
    <Space direction="vertical" size="small" style={{ display: 'flex' }}>
      <div/>
      <Descriptions
        bordered
        size='small'
        column={{
          xxl: 6,
          xl: 3,
          lg: 3,
          md: 3,
          sm: 3,
          xs: 2,
        }}
      >
        <Descriptions.Item label="First Name:" span={1}>{ formData.firstName }</Descriptions.Item>
        <Descriptions.Item label="Middle Name:" span={2}>{ formData.middleName }</Descriptions.Item>
        <Descriptions.Item label="Last Name:" span={3}>{ formData.lastName }</Descriptions.Item>
        <Descriptions.Item label="Contact Phone:" span={1}>{ formData.contactPhone }</Descriptions.Item>
        <Descriptions.Item label="Alt. Phone:" span={2}>{ formData.altPhone }</Descriptions.Item>
        <Descriptions.Item label="E-mail:" span={3}>{ formData.email }</Descriptions.Item>
        <Descriptions.Item label="Installation Address:" span={3}>{ formData.installationAddress }</Descriptions.Item>
        <Descriptions.Item label="Unit Type:" span={1}>{ UnitType(formData.optionsUnitType) }</Descriptions.Item>
        <Descriptions.Item label="Buzz #:" span={2}>{ formData.buzz }</Descriptions.Item>
        <Descriptions.Item label="City/Town:" span={1}>{ formData.city }</Descriptions.Item>
        <Descriptions.Item label="Province:" span={2}>{ formData.province }</Descriptions.Item>
        <Descriptions.Item label="Billing Address:" span={3}>{ formData.billingAddress }</Descriptions.Item>
        <Descriptions.Item label="Postal Code:" span={3}>{ formData.postalCode }</Descriptions.Item>
        <Descriptions.Item label="Preferred delivery Time:" span={1}>{ InstallationTime(formData.installationTime) }</Descriptions.Item>
        <Descriptions.Item label="Planed Date:" span={2}>{ formData.dateRequest !== "" ? formData.dateRequest.format('DD/MMM/YYYY') : "" }</Descriptions.Item>
        <Descriptions.Item label="Card Type:" span={3}>{ CardType(formData.optionsCardType) }</Descriptions.Item>
        <Descriptions.Item label="Card Holder's First Name:" span={1}>{ formData.cardFirstName }</Descriptions.Item>
        <Descriptions.Item label="Last Name:" span={2}>{ formData.cardLastName }</Descriptions.Item>
        <Descriptions.Item label="Card Number:" span={1}>{ formData.cardNumber }</Descriptions.Item>
        <Descriptions.Item label="Expiry Date:" span={2}>{ formData.mm }/{ formData.yy }</Descriptions.Item>
        <Descriptions.Item label="CVV:" span={3}>{ "***" }</Descriptions.Item>
        <Descriptions.Item label="Registration Address:" span={3}>{ formData.cardRegistrationAddress }</Descriptions.Item>
        { AdditionalRequirements(formData.additionalRequirements) }
        <Descriptions.Item label="Product(s):" span={3}>
          { ProductsQtyDisplay(formData.productsDetail) }
          { ProductsSubtotalDisplay(formData.productsDetail) }
          { IpPhoneInfoDisplay() }
        </Descriptions.Item>
      </Descriptions>
    </Space>
  );
};

export default Summary;

export const SummaryPrintTemplate = class SummaryPrintTemplate extends Component {
  render() {
    const formData = this.props.formData
    const currentDate = moment().format("DD-MMMM-YY");

    const printTable = (
      <div style={{ padding: '0 3.5%', marginTop: 64 }}>
        <Row>
          <Col span={24}>
            <div style={{ textAlign: 'center', fontWeight: 'bold', }}>
              <span>Cable Internet Service Application</span>
            </div>
          </Col>
          <Col span={12}>
            <span level={5} style={{fontSize: '10px',}}>{'Date: ' + currentDate}</span>
          </Col>
        </Row>
        <Summary formData={formData}/>
      </div>
    );

    return printTable;
  }
};
