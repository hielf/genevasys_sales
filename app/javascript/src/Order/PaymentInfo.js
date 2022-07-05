import React from 'react';
import { Layout, Divider, Checkbox } from 'antd';
import { Space } from 'antd';
import { Row, Col } from 'antd';
import { Radio } from 'antd';
import { Input, Tooltip } from 'antd';
import { GlobalOutlined, CreditCardOutlined, UserOutlined, DollarOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcMastercard, faCcVisa } from '@fortawesome/free-brands-svg-icons'
import {labelStyle, dataStyle, labelStyleSmall, dataStyleSmall, boldStyle, dividerStyle} from '../Components/FormStyle'

const PaymentInfo = ({formData, setFormData}) => {

  const onChange1 = ({ target: { value } }) => {
    setFormData({ ...formData, optionsCardType: value });
  };

  const onChange2 = ({ target: { value } }) => {
    setFormData({ ...formData, cardFirstName: value });
  };

  const onChange3 = ({ target: { value } }) => {
    setFormData({ ...formData, cardLastName: value });
  };

  const onChange4 = ({ target: { value } }) => {
    setFormData({ ...formData, cardNumber: value });
  };

  const onChange5 = ({ target: { value } }) => {
    setFormData({ ...formData, mm: value });
  };

  const onChange6 = ({ target: { value } }) => {
    setFormData({ ...formData, yy: value });
  };

  const onChange7 = ({ target: { value } }) => {
    setFormData({ ...formData, cvv: value });
  };

  const onChange8 = ({ target: { value } }) => {
    setFormData({ ...formData, cardRegistrationAddress: value });
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <div/>
      <Divider orientation="left" style={dividerStyle}>
        <Space direction='horizontal' size='small' >
          <CreditCardOutlined />Credit Card Info
        </Space>
      </Divider>

      <Row>
        <Col span={24}>
          <span style={labelStyle}>Card Type:</span>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Radio.Group name="optionsCardType" defaultValue={1} onChange={onChange1} value={formData.optionsCardType}>
            <Radio value={1}>VISA</Radio>
            <Radio value={2}>MasterCard</Radio>
            <Radio value={3}>UnionPay</Radio>
          </Radio.Group>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <span style={labelStyle}>Card Holder's Name:</span>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Input placeholder="First Name" onChange={onChange2} value={formData.cardFirstName} />
            </Col>
            <Col span={12}>
              <Input placeholder="Last Name" onChange={onChange3} value={formData.cardLastName} />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <span style={labelStyle}>Card Number:</span>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Input
            placeholder="Please input digt numbers"
            onChange={onChange4}
            value={formData.cardNumber}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            maxLength={19}/>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Row>
              <Col span={24}>
                <span style={labelStyle}>Expire Date:</span>
              </Col>
            </Row>
            <Row gutter={[16, 16]} align="middle">
              <Col span={6}>
                <Input placeholder="MM"
                  style={{ width: '100%' }}
                  onChange={onChange5}
                  value={formData.mm}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  maxLength={2}/>
              </Col>
              /
              <Col span={6}>
                <Input
                  placeholder="YY"
                  style={{ width: '100%' }}
                  onChange={onChange6}
                  value={formData.yy}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  maxLength={2}/>
              </Col>
            </Row>
          </Space>
        </Col>
        <Col span={12}>
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Row>
              <Col span={24}>
                <span style={labelStyle}>CVV:</span>
              </Col>
            </Row>
            <Row gutter={[16, 16]} align="middle">
              <Col span={6}>
                <Input placeholder="3 Digts"
                  style={{ width: '100px' }}
                  onChange={onChange7}
                  value={formData.cvv}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  maxLength={3}/>
              </Col>
            </Row>
          </Space>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <span style={labelStyle}>Credit Card Registration Address:</span>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Input
            placeholder="#Unit-Number Street City Province"
            onChange={onChange8}
            value={formData.cardRegistrationAddress}/>
        </Col>
      </Row>
    </Space>
  );
};

export default PaymentInfo;
