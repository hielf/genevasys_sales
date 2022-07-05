import React from 'react';
import { Divider, Checkbox } from 'antd';
import { DatePicker, Space } from 'antd';
import { Row, Col } from 'antd';
import { Radio } from 'antd';
import { Input } from 'antd';
import { ClockCircleOutlined, CalendarOutlined } from '@ant-design/icons';
import {labelStyle, dataStyle, labelStyleSmall, dataStyleSmall, boldStyle, dividerStyle} from '../Components/FormStyle'

const ServiceInfo = ({formData, setFormData}) => {
  const onChange = (e) => {
    setFormData({ ...formData, installationTime: e.target.value });
  };

  const onChangeDate = (date, dateString) => {
    setFormData({ ...formData, dateRequest: date });
  };

  const disabledDate = (current) => {
    var today = new Date();
    // Can not select days before today and today
    return current < today;
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Divider orientation="left" style={dividerStyle}>
        <Space direction='horizontal' size='small' >
          <CalendarOutlined />Prefer Installation Time
        </Space>
      </Divider>
      <Row>
        <Col span={24}>
          <Space direction='vertical' size='small' >
            <span style={labelStyle}>Choose Time Period:</span>
            <Radio.Group name="installationTime" defaultValue={1} value={formData.installationTime} onChange={onChange}>
              <Radio value={1}>8am-12pm</Radio>
              <Radio value={2}>12pm-4pm</Radio>
            </Radio.Group>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Space direction='vertical' size='small' >
            <span style={labelStyle}>Choose Date:</span>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Space direction='vertical' size='small' >
            <DatePicker
              disabledDate={disabledDate}
              onChange={onChangeDate}
              value={formData.dateRequest}
              style={{ width: "100%" }} />
          </Space>
        </Col>
      </Row>
    </Space>
  );
};

export default ServiceInfo;
