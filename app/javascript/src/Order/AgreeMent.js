import React from 'react';
import { useLocation } from "react-router-dom";
import { Divider, Checkbox } from 'antd';
import { Space } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const AgreeMent = ({formData, setFormData}) => {
  let query = useQuery();

  const promoteCode = query.get("promote_code");

  const labelStyle = { fontWeight: 'bold', color: '#90BA75', };

  const onChange1 = (checkedValues) => {
    setFormData((formData) => ({ ...formData, checkAgreeMent: checkedValues.target.checked }));
  };

  const onChange2 = ({ target: { value } }) => {
    setFormData((formData) => ({ ...formData, promoteCode: value }));
  };

  return (
    <Space direction="vertical" size="small" style={{ display: 'flex' }}>
      <Checkbox onChange={onChange1} size="small" checked={formData.checkAgreeMent}>
        I agree to the <a target='_blank' href='/terms'>terms and conditions</a> as set out by the user agreement.
      </Checkbox>
      <Row>
        <Col span={12}>
          <Space direction='horizontal' size='small' >
            <span style={labelStyle}>Promote Code#:</span>
            <Input
              placeholder="Fill by staff"
              size="small"
              onChange={onChange2}
              value={formData.promoteCode === "" ? promoteCode : formData.promoteCode}/>
          </Space>
        </Col>
      </Row>
    </Space>
  );
};

export default AgreeMent;
