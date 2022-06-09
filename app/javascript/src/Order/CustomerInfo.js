import React from 'react';
import { Layout, Divider, Checkbox } from 'antd';
import { Space } from 'antd';
import { Row, Col } from 'antd';
import { Radio } from 'antd';
import { Input, Select } from 'antd';

const CustomerInfo = ({formData, setFormData}) => {

  const onChange1 = ({ target: { value } }) => {
      setFormData({ ...formData, firstName: value });
    };

  const onChange2 = ({ target: { value } }) => {
      setFormData({ ...formData, middleName: value });
    };

  const onChange3 = ({ target: { value } }) => {
      setFormData({ ...formData, lastName: value });
    };

  const onChange4 = ({ target: { value } }) => {
      setFormData({ ...formData, contactPhone: value });
    };

  const onChange5 = ({ target: { value } }) => {
      setFormData({ ...formData, altPhone: value });
    };

  const onChange6 = ({ target: { value } }) => {
      setFormData({ ...formData, email: value });
    };

  const onChange7 = ({ target: { value } }) => {
      setFormData({ ...formData, installationAddress: value });
    };

  const onChange8 = (value) => {
      setFormData({ ...formData, city: value });
    };

  const onChange9 = ({ target: { value } }) => {
      setFormData({ ...formData, province: value });
    };

  const onChange10 = ({ target: { value } }) => {
      setFormData({ ...formData, postalCode: value });
    };

  const onChange11 = ({ target: { value } }) => {
      setFormData({ ...formData, optionsUnitType: value });
    };

  const onChange12 = ({ target: { value } }) => {
      setFormData({ ...formData, unitType: value });
    };

  const onChange13 = ({ target: { value } }) => {
      setFormData({ ...formData, buzz: value });
    };

  const onChange14 = ({ target: { value } }) => {
      setFormData({ ...formData, optionsSameAddress: value });
    };

  const onChange15 = ({ target: { value } }) => {
      setFormData({ ...formData, billingAddress: value });
    };

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Divider orientation="left">Customer Name</Divider>
      <Input placeholder="First Name" onChange={onChange1} />
      <Input placeholder="Middle Name" onChange={onChange2} />
      <Input placeholder="Last Name" onChange={onChange3} />

      <Divider orientation="left">Contact Information</Divider>
      <Input placeholder="Contact Phone" onChange={onChange4} />
      <Input placeholder="Alt. Phone" onChange={onChange5} />
      <Input placeholder="E-mail" onChange={onChange6} />

      <Divider orientation="left">Address Information</Divider>
      <Input placeholder="Installation Address" onChange={onChange7} />
      <Row>
        <Col span={12}>
          <Select defaultValue="VANCOUVER" style={{ width: "100%" }} onChange={onChange8} >
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
          <Input placeholder="Province" defaultValue="BC"  onChange={onChange9}/>
        </Col>
        <Col span={8}>
          <Input placeholder="Postal Code" onChange={onChange10}/>
        </Col>
      </Row>

      <Divider orientation="left">Unit Type</Divider>
      <Row justify="space-around" align="middle">
        <Col span={12}>
          <Radio.Group name="optionsUnitType" defaultValue={1} onChange={onChange11}>
            <Radio value={1}>
              Main
            </Radio>
            <Radio value={2}>
              Basement
            </Radio>
            <Radio value={3}>
              Other
            </Radio>
          </Radio.Group>
        </Col>
        <Col span={12}>
          <Input
              placeholder="UnitType"
              disabled={formData.optionsUnitType === 3 ? false : true}
              onChange={onChange12}
            />
        </Col>
      </Row>

      <Input placeholder="Buzz" onChange={onChange13} />

      <Divider orientation="left">Billing Address</Divider>
      <Radio.Group name="optionsSameAddress" defaultValue={1} onChange={onChange14}>
        <Radio value={1}>
          Same As Installation Address
        </Radio>
        <Radio value={2}>
          Different From Installation Address
        </Radio>
      </Radio.Group>
      <Input
          placeholder={formData.optionsSameAddress === 1 ? formData.installationAddress : 'Billing Address'}
          disabled={formData.optionsSameAddress === 2 ? false : true}
          onChange={onChange15}
        />
    </Space>
  );
};

export default CustomerInfo;
