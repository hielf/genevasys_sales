import React from 'react';
import { Layout, Divider, Checkbox } from 'antd';
import { Space } from 'antd';
import { Row, Col } from 'antd';
import { Radio } from 'antd';
import { Input, Select } from 'antd';

const onChange1 = ({ target: { value } }) => {
    console.log('radio1 checked', value);
    // setValue3(value);
  };

const onChange2 = ({ target: { value } }) => {
    console.log('radio2 checked', value);
    // setValue3(value);
  };

const CustomerInfo = ({formData, setFormData}) => (
  <>
  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
    <Divider orientation="left">Customer Name</Divider>
    <Input placeholder="First Name" />
    <Input placeholder="Middle Name" />
    <Input placeholder="Last Name" />

    <Divider orientation="left">Contact Information</Divider>
    <Input placeholder="Contact Phone" />
    <Input placeholder="Alt. Phone" />
    <Input placeholder="E-mail" />

    <Divider orientation="left">Address Information</Divider>
    <Input placeholder="Installation Address" />
    <Row>
      <Col span={12}>
        <Select defaultValue="VANCOUVER" style={{ width: "100%" }}>
          <Select.Option value="VANCOUVER">VANCOUVER</Select.Option>
          <Select.Option value="BURNABY">BURNABY</Select.Option>
          <Select.Option value="RICHMOND">RICHMOND</Select.Option>
          <Select.Option value="WEST VANCOUVER">WEST VANCOUVER</Select.Option>
          <Select.Option value="NORTH VANCOUVER">NORTH VANCOUVER</Select.Option>
          <Select.Option value="NEW WESTMINSTER">NEW WESTMINSTER</Select.Option>
          <Select.Option value="SURREY">SURREY</Select.Option>
          <Select.Option value="WHITE ROCK">WHITE ROCK</Select.Option>
          <Select.Option value="COQUITLAM">COQUITLAM</Select.Option>
          <Select.Option value="PORT COQUITLAM">PORT COQUITLAM"</Select.Option>
          <Select.Option value="DELTA">DELTA</Select.Option>
          <Select.Option value="LANGLEY">LANGLEY</Select.Option>
          <Select.Option value="PORT MOODY">PORT MOODY</Select.Option>
          <Select.Option value="MAPLE RIDGE">MAPLE RIDGE</Select.Option>
        </Select>
      </Col>
      <Col span={4}>
        <Input placeholder="Province" defaultValue="BC" />
      </Col>
      <Col span={8}>
        <Input placeholder="Postal Code" />
      </Col>
    </Row>

    <Divider orientation="left">Unit Type</Divider>
    <Row justify="space-around" align="middle">
      <Col span={12}>
        <Radio.Group name="optionsUnitType" defaultValue={1} onChange={onChange1}>
          <Radio
            value={1}
            onChange={(e) => {
              setFormData({ ...formData, optionsUnitType: e.target.value });
            }}>
            Main
          </Radio>
          <Radio
            value={2}
            onChange={(e) => {
              setFormData({ ...formData, optionsUnitType: e.target.value });
            }}>
            Basement
          </Radio>
          <Radio
            value={3}
            onChange={(e) => {
              setFormData({ ...formData, optionsUnitType: e.target.value });
            }}>
            Other
          </Radio>
        </Radio.Group>
      </Col>
      <Col span={12}>
        <Input
            placeholder="UnitType"
            disabled={formData.optionsUnitType === 3 ? false : true}
            onChange={(e) => {
              setFormData({ ...formData, UnitType: e.target.value });
            }}
          />
      </Col>
    </Row>

    <Input placeholder="Buzz" />

    <Divider orientation="left">Billing Address</Divider>
    <Radio.Group name="optionsSameAddress" defaultValue={1} onChange={onChange2}>
      <Radio
        value={1}
        onChange={(e) => {
          setFormData({ ...formData, optionsSameAddress: e.target.value });
        }}>
        Same As Installation Address
      </Radio>
      <Radio
        value={2}
        onChange={(e) => {
          setFormData({ ...formData, optionsSameAddress: e.target.value });
        }}>
        Different From Installation Address
      </Radio>
    </Radio.Group>
    <Input
        placeholder="Billing Address"
        disabled={formData.optionsSameAddress === 2 ? false : true}
        onChange={(e) => {
          setFormData({ ...formData, BillingAddress: e.target.value });
        }}
      />
  </Space>
  </>
);

export default CustomerInfo;
