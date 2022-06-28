import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';

const Submit = ({formData, setFormData}) => {

  return (
    <Result
      icon={<SmileOutlined />}
      title="Great, we have done all the operations!"
      extra={<Button type="primary">Print</Button>}
    />
  );

};

export default Submit;
