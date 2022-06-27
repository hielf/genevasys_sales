import React from 'react';
import { Divider, Checkbox } from 'antd';
import { Space } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';

const AgreeMent = ({formData, setFormData}) => {
  const onChange1 = (checkedValues) => {
    setFormData((formData) => ({ ...formData, checkAgreeMent: checkedValues.target.checked }));
  };

  const onChange2 = ({ target: { value } }) => {
    setFormData((formData) => ({ ...formData, promoteCode: value }));
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Checkbox onChange={onChange1} checked={formData.checkAgreeMent}>
        I agree to the
        <a target='_blank' href='/terms'>
         terms and conditions
        </a> as set out by the user agreement.
      </Checkbox>
      <Input
        placeholder="Promote Code#"
        onChange={onChange2}
        value={formData.promoteCode}/>
    </Space>
  );
};

export default AgreeMent;
