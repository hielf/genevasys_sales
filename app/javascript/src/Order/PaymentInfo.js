import React from 'react';
import { Layout, Divider, Checkbox } from 'antd';
import { Space } from 'antd';
import { Row, Col } from 'antd';
import { Radio } from 'antd';
import { Input, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

const onChange = (checkedValues) => {
  console.log('checked = ', checkedValues);
};

const PaymentInfo = () => (
  <>
  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
    <Divider orientation="left">Card Type</Divider>
    <Radio.Group name="optionsCardType" defaultValue={1}>
      <Radio value={1}>Visa</Radio>
      <Radio value={2}>MasterCard</Radio>
    </Radio.Group>

    <Divider orientation="left">Card Holder's Name</Divider>
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <Input placeholder="First Name" />
      </Col>
      <Col span={12}>
        <Input placeholder="Last Name" />
      </Col>
    </Row>

    <Divider orientation="left">Credit Card Info</Divider>
    <Input placeholder="Card Number" />
    <Row gutter={[16, 16]} align="middle">
      <Col span={6}>
        <Input placeholder="MM" style={{ width: '100%' }} />
      </Col>
      /
      <Col span={6}>
        <Input placeholder="YY" style={{ width: '100%' }} />
      </Col>
      <Col span={6}>
        <Input placeholder="CVV" style={{ width: '100px' }} />
      </Col>
    </Row>

    <Divider orientation="left">Payment Schedule</Divider>
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <Input prefix="$" suffix="CAD" placeholder="First Initial Payment" />
      </Col>
      <Col span={12}>
        <Input prefix="$" suffix="CAD" placeholder="Recurrent Payment" />
      </Col>
    </Row>
  </Space>
  </>
);

export default PaymentInfo;
