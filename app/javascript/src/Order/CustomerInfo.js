import React from 'react';
import { Layout, Divider, Checkbox } from 'antd';
import { Space } from 'antd';
import { Row, Col } from 'antd';
import { Radio } from 'antd';
import { Input, Select } from 'antd';
import { UserAddOutlined, ContactsOutlined, AimOutlined, HomeOutlined, CarryOutOutlined } from '@ant-design/icons';

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
      if (formData.optionsSameAddress === 1) {
        setFormData((formData) => ({ ...formData, billingAddress: value }));
      }
      setFormData((formData) => ({ ...formData, installationAddress: value }));
    };

  const onChange8 = (value) => {
      setFormData({ ...formData, city: value });
    };

  const onChange9 = (value) => {
      setFormData({ ...formData, province: value });
    };

  const onChange10 = ({ target: { value } }) => {
      setFormData({ ...formData, postalCode: value });
    };

  const onChange11 = ({ target: { value } }) => {
      setFormData({ ...formData, optionsUnitType: value });
    };

  const onChange13 = ({ target: { value } }) => {
      setFormData({ ...formData, buzz: value });
    };

  const onChange14 = ({ target: { value } }) => {
      if (value === 1) {
        setFormData((formData) => ({ ...formData, billingAddress: formData.installationAddress }));
      }
      setFormData((formData) => ({ ...formData, optionsSameAddress: value }));
    };

  const onChange15 = ({ target: { value } }) => {
      setFormData({ ...formData, billingAddress: value });
    };

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Divider orientation="left">
        <Space direction='horizontal' size='small' >
          <UserAddOutlined />Customer Name
        </Space>
      </Divider>
      <Input placeholder="First Name" onChange={onChange1} value={formData.firstName} />
      <Input placeholder="Middle Name" onChange={onChange2} value={formData.middleName} />
      <Input placeholder="Last Name" onChange={onChange3} value={formData.lastName} />

      <Divider orientation="left">
        <Space direction='horizontal' size='small' >
          <ContactsOutlined />Contact Information
        </Space>
      </Divider>
      <Input
      placeholder="Contact Phone"
      mask={'(000) 000-0000'}
      onChange={onChange4}
      value={formData.contactPhone} />
      <Input placeholder="Alt. Phone" onChange={onChange5} value={formData.altPhone} />
      <Input placeholder="E-mail" onChange={onChange6} value={formData.email} />

      <Divider orientation="left">
        <Space direction='horizontal' size='small' >
          <AimOutlined />Address Information
        </Space>
      </Divider>
      <Input placeholder="Installation Address (#Unit-Number Street)" onChange={onChange7} value={formData.installationAddress} />
      <Row>
        <Col span={12}>
          <Select defaultValue="VANCOUVER" style={{ width: "100%" }} onChange={onChange8} value={formData.city} >
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
          <Select defaultValue="BC" style={{ width: "100%" }} onChange={onChange9} disabled={true} value={formData.province} >
            <Select.Option value="AB">AB</Select.Option>
            <Select.Option value="BC">BC</Select.Option>
            <Select.Option value="MB">MB</Select.Option>
            <Select.Option value="NB">NB</Select.Option>
            <Select.Option value="NL">NL</Select.Option>
            <Select.Option value="NS">NS</Select.Option>
            <Select.Option value="ON">ON</Select.Option>
            <Select.Option value="PE">PE</Select.Option>
            <Select.Option value="QC">QC</Select.Option>
            <Select.Option value="SK">SK</Select.Option>
          </Select>
        </Col>
        <Col span={8}>
          <Input placeholder="Postal Code" onChange={onChange10} value={formData.postalCode}/>
        </Col>
      </Row>

      <Divider orientation="left">
        <Space direction='horizontal' size='small' >
          <HomeOutlined />Unit Type
        </Space>
      </Divider>
      <Row justify="space-around" align="middle">
        <Col span={12}>
          <Radio.Group name="optionsUnitType" defaultValue={1} onChange={onChange11} value={formData.optionsUnitType}>
            <Radio value={1}>
              Main
            </Radio>
            <Radio value={2}>
              Basement
            </Radio>
            <Radio value={3}>
              Unit
            </Radio>
          </Radio.Group>
        </Col>
        <Col span={12}>
          <Input
              placeholder="#Buzz"
              disabled={formData.optionsUnitType === 3 ? false : true}
              onChange={onChange13}
              value={formData.buzz}
            />
        </Col>
      </Row>

      <Divider orientation="left">
        <Space direction='horizontal' size='small' >
          <CarryOutOutlined />Billing Address
        </Space>
      </Divider>
      <Radio.Group name="optionsSameAddress" defaultValue={1} onChange={onChange14} value={formData.optionsSameAddress} >
        <Radio value={1}>
          Same As Installation Address
        </Radio>
        <Radio value={2}>
          Different From Installation Address
        </Radio>
      </Radio.Group>
      <Input
          placeholder='Billing Address'
          disabled={formData.optionsSameAddress === 2 ? false : true}
          onChange={onChange15}
          value={formData.billingAddress}
        />
    </Space>
  );
};

export default CustomerInfo;
