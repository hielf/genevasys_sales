import React from 'react';
import { Divider, Checkbox } from 'antd';
import { DatePicker, Space } from 'antd';
import { Row, Col } from 'antd';
import { Radio } from 'antd';
import { Input } from 'antd';

const onChange = (checkedValues) => {
  console.log('checked = ', checkedValues);
};

const onChangeDate = (date, dateString) => {
  console.log(date, dateString);
};

const ServiceInfo = () => (
  <>
  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
    <Divider orientation="left">Installation Type</Divider>

    <Row justify="space-around" align="middle">
      <Col span={12}>
        <Radio.Group name="optionsNew" defaultValue={1}>
          <Radio value={1}>New Installation</Radio>
          <Radio value={2}>Existing transfer</Radio>
        </Radio.Group>
      </Col>
      <Col span={12}>
        <Input placeholder="Transfer From(Carrier Name)" disabled={ true } />
      </Col>
    </Row>

    <Divider orientation="left">Residential or Business</Divider>
    <Radio.Group name="optionsType" defaultValue={1}>
      <Radio value={3}>Residential</Radio>
      <Radio value={4}>Business</Radio>
    </Radio.Group>

    <Divider orientation="left">Prefer Installation Time</Divider>
    <Radio.Group name="optionsType" defaultValue={1}>
      <Radio value={3}>8am-12pm</Radio>
      <Radio value={4}>12pm-4pm</Radio>
    </Radio.Group>

    <Divider orientation="left">Date Request</Divider>
    <DatePicker placeholder="choose date" onChange={onChangeDate} style={{ width: "100%" }} />
  </Space>
  </>
);

export default ServiceInfo;
