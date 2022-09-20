import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Divider, Checkbox } from 'antd';
import { Space } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import {labelStyle, dataStyle, labelStyleSmall, dataStyleSmall, boldStyle, dividerStyle} from '../Components/FormStyle'

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const AgreeMent = ({formData, setFormData}) => {
  let query = useQuery();

  const promoteCode = query.get("promote_code");
  useEffect(() => { setFormData((formData) => ({ ...formData, promoteCode: promoteCode })); }, [] )

  const onChange1 = (checkedValues) => {
    setFormData((formData) => ({ ...formData, checkAgreeMent: checkedValues.target.checked }));
  };

  const onChange2 = ({ target: { value } }) => {
    setFormData((formData) => ({ ...formData, promoteCode: value }));
  };

  const onChange3 = ({ target: { value } }) => {
    setFormData((formData) => ({ ...formData, additionalRequirements: value }));
  };

  return (
    <Space direction="vertical" size="small" style={{ display: 'flex', }}>
      <Checkbox onChange={onChange1} size="small" checked={formData.checkAgreeMent}>
        I agree to the <a target='_blank' href='/terms'>terms and conditions</a> as set out by the user agreement.
      </Checkbox>
      <Row>
        <Col span={4}>
          <span style={labelStyle}>Note:</span>
        </Col>
        <Col span={16}>
          <Input
            size="small"
            onChange={onChange3}
            value={formData.additionalRequirements}/>
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <span style={labelStyle}>Promote Code#:</span>
        </Col>
        <Col span={4}>
          <Input
            placeholder="Fill by staff"
            size="small"
            onChange={onChange2}
            value={formData.promoteCode === "" ? promoteCode : formData.promoteCode}/>
        </Col>
      </Row>
    </Space>
  );
};

export default AgreeMent;
