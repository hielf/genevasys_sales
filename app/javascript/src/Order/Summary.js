import React from 'react';
import { Layout, Divider, Space } from 'antd';
import { Row, Col } from 'antd';
import { GlobalOutlined, Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

const Summary = ({formData, setFormData}) => {
  const list = {
    Bundle: [
      {
        label: 'Internet + TV Box + IP Phone 75: $55.95/month',
        value: 'A1',
        price: 55.95,
      },
      {
        label: 'Internet + TV Box + IP Phone 300: $85.95/month',
        value: 'A2',
        price: 155.95,
      },
      {
        label: 'Internet + TV Box + IP Phone 750: $105.95/month',
        value: 'A3',
        price: 255.95,
      },
      {
        label: 'Internet + TV Box + IP Phone 1000: $105.95/month',
        value: 'A4',
        price: 355.95,
      },
    ],
    Internet: [
      {
        label: 'Internet 75: $55.95/month',
        value: 'A5',
        price: 55.95,
      },
      {
        label: 'Internet 300: $85.95/month',
        value: 'A6',
        price: 515.95,
      },
      {
        label: 'Internet 750: $105.95/month',
        value: 'A7',
        price: 525.95,
      },
      {
        label: 'Internet 1000: $105.95/month',
        value: 'A8',
        price: 535.95,
      },
    ],
    'TV Box': [
      {
        label: 'Rent Box 75: $10.00/month',
        value: 'A9',
        price: 15.95,
      },
      {
        label: 'Buy TV Box: $300',
        value: 'A21',
        price: 55.95,
      },
    ],
    'IP Phone': [
      {
        label: 'IP Phone Rental: 10.95/month',
        value: 'A111',
        price: 15.95,
      },
    ],
  };

  const lableStyle = { fontWeight: 'bold', color: '#90BA75', };
  const dataStyle = { textDecoration: 'underline', };
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

  const ProductsDisplay = (products) => {
    return (
      <div>
        {products.map((product, index) => {
          console.log(product[0]);
          return (
            <Row justify="space-between center" key={ product[0].value }>
              <Col span={18}>
                <span style={{}}>{ index + 1 }. { product[0].label }</span>
              </Col>
              <Col span={2}>

              </Col>
              <Col span={4}>
                <span style={ boldStyle }>${ product[0].price }</span>
              </Col>
            </Row>
          )
        })}
      </div>
    )
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
              <span style={lableStyle}>First Name:</span>
              <span style={dataStyle}>{ formData.firstName }</span>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={lableStyle}>Middle Name:</span>
              <span style={dataStyle}>{ formData.middleName }</span>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={lableStyle}>Last Name:</span>
              <span style={dataStyle}>{ formData.lastName }</span>
            </Space>
          </Col>
        </Row>
        <Row justify="space-between center">
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={lableStyle}>Contact Phone:</span>
              <span style={dataStyle}>{ formData.contactPhone }</span>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={lableStyle}>Alt. Phone:</span>
              <span style={dataStyle}>{ formData.altPhone }</span>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={lableStyle}>E-mail:</span>
              <span style={dataStyle}>{ formData.email }</span>
            </Space>
          </Col>
        </Row>
        <Row justify="space-between center">
          <Col span={24}>
            <Space direction='horizontal' size='small' >
              <span style={lableStyle}>Installation Address:</span>
              <span style={dataStyle}>{ formData.installationAddress }</span>
            </Space>
          </Col>
        </Row>
        <Row justify="space-between center">
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={lableStyle}>Unit Type:</span>
              <span style={dataStyle}>{ UnitType(formData.optionsUnitType) }</span>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={lableStyle}>Buzz #:</span>
              <span style={dataStyle}>{ formData.buzz }</span>
            </Space>
          </Col>
        </Row>
        <Row justify="space-between center">
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={lableStyle}>City/Town:</span>
              <span style={dataStyle}>{ formData.city }</span>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={lableStyle}>Province:</span>
              <span style={dataStyle}>{ formData.province }</span>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={lableStyle}>Postal Code:</span>
              <span style={dataStyle}>{ formData.postalCode }</span>
            </Space>
          </Col>
        </Row>
        <Row justify="space-between center">
          <Col span={24}>
            <Space direction='horizontal' size='small' >
              <span style={lableStyle}>Billing Address:</span>
              <span style={dataStyle}>{ formData.billingAddress }</span>
            </Space>
          </Col>
        </Row>

        <Divider orientation="center">
          Product Request
        </Divider>
        { ProductsDisplay(formData.productsDetail) }

        <Divider orientation="center">
          Service Request
        </Divider>
        <Row justify="space-between center">
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={lableStyle}>Preferred delivery Time:</span>
              <span style={dataStyle}>{ InstallationTime(formData.installationTime) }</span>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={lableStyle}>Planed Date:</span>
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
              <span style={lableStyle}>Card Type:</span>
              <span style={dataStyle}>{ CardType(formData.optionsCardType) }</span>
            </Space>
          </Col>
        </Row>
        <Row justify="space-between center">
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={lableStyle}>Card Holder's First Name:</span>
              <span style={dataStyle}>{ formData.cardFirstName }</span>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={lableStyle}>Last Name:</span>
              <span style={dataStyle}>{ formData.cardLastName }</span>
            </Space>
          </Col>
        </Row>
        <Row justify="space-between center">
          <Col span={24}>
            <Space direction='horizontal' size='small' >
              <span style={lableStyle}>Card Number:</span>
              <span style={dataStyle}>{ formData.cardNumber }</span>
            </Space>
          </Col>
        </Row>
        <Row justify="space-between center">
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={lableStyle}>Expiry Date:</span>
              <span style={dataStyle}>{ formData.mm }/{ formData.yy }</span>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction='horizontal' size='small' >
              <span style={lableStyle}>CVV:</span>
              <span style={dataStyle}>{ "***" }</span>
            </Space>
          </Col>
        </Row>
        <Row justify="space-between center">
          <Col span={24}>
            <Space direction='horizontal' size='small' >
              <span style={lableStyle}>Credit Card Registration Address:</span>
              <span style={dataStyle}>{ formData.cardRegistrationAddress }</span>
            </Space>
          </Col>
        </Row>
      </Space>
    </Typography>
  );
};

export default Summary;
