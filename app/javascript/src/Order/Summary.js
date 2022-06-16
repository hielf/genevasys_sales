import React from 'react';
import { Layout, Divider, Space } from 'antd';
import { Row, Col } from 'antd';

const Summary = ({formData, setFormData}) => {

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Divider orientation="middle">
        <Space direction='horizontal' size='small' >
          <GlobalOutlined />Customer Information
        </Space>
      </Divider>

    </Space>
  );
};

export default Summary;
