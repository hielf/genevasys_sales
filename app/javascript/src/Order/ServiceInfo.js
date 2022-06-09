import React from 'react';
import { Divider, Checkbox } from 'antd';
import { DatePicker, Space } from 'antd';
import { Row, Col } from 'antd';
import { Radio } from 'antd';
import { Input } from 'antd';
import { ClockCircleOutlined, CalendarOutlined } from '@ant-design/icons';

const ServiceInfo = ({formData, setFormData}) => {
  const onChange = (e) => {
    console.log('checked = ', e);
    setFormData({ ...formData, installationTime: e.target.value });
  };

  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
    setFormData({ ...formData, dateRequest: dateString });
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Divider orientation="left">
        <Space direction='horizontal' size='small' >
          <ClockCircleOutlined />Prefer Installation Time
        </Space>
      </Divider>
      <Radio.Group name="optionsType" defaultValue={1} onChange={onChange}>
        <Radio value={1}>8am-12pm</Radio>
        <Radio value={2}>12pm-4pm</Radio>
      </Radio.Group>

      <Divider orientation="left">
        <Space direction='horizontal' size='small' >
          <CalendarOutlined />Date Request
        </Space>
      </Divider>
      <DatePicker placeholder="choose date" onChange={onChangeDate} style={{ width: "100%" }} />
    </Space>
  );
};

export default ServiceInfo;
