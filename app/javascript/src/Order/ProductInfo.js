import React from 'react';
import { Divider, Checkbox } from 'antd';
import { Space } from 'antd';
import { Row, Col } from 'antd';

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
];

const ProductInfo = () => (
  <>
  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
    <Divider orientation="left">Bundle</Divider>
    <Checkbox.Group onChange={onChange}>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        {optionsInternet.map(d => (
          <Row key={d.value}>
            <Col span={24}>
              <Checkbox value={d.value}>{d.label}</Checkbox>
            </Col>
          </Row>
        ))}
      </Space>
    </Checkbox.Group>

    <Divider orientation="left">Internet</Divider>
    <Checkbox.Group options={optionsInternet} onChange={onChange} />

    <Divider orientation="left">TV Box</Divider>
    <Checkbox.Group options={optionsInternet} onChange={onChange} />

    <Divider orientation="left">IP Phone</Divider>
    <Checkbox.Group options={optionsInternet} onChange={onChange} />
  </Space>
  </>
);

export default ProductInfo;
