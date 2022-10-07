import React, { useState, useEffect } from 'react';
import { apiGet } from '../Functions/ApiRequest'

const ProductInfo = ({formData, setFormData}) => {

  const [list, setList] = useState({});
  console.log(list);
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const res = await apiGet('products', []);
    setList(res);
  };

  return (

      <Space direction='vertical' size='large'>
        {
          Object.keys(list).map(p => {
            if (p == "bundles") {
              return (
                <Space direction='vertical' size='middle' key={ 'space_key_' + p } style={{ display: 'flex' }}>
                  <Divider orientation='left' style={dividerStyle}>
                    <Space direction='horizontal' size='small' >
                      {icons(p)}{categroy(p)}
                    </Space>
                  </Divider>
                  {
                    list[p].map(d => {
                      return (
                        <Checkbox.Group
                        key={d.value}
                        onChange={ (p == "internets") ? onChangeB : ((p == "tv_box") ? onChangeC : (p == "ip_phone") ? onChangeD : null)}
                        value={ (p == "internets") ? formData.productBs : ((p == "tv_box") ? formData.productCs : (p == "ip_phone") ? formData.productDs : null)}
                        style={{ width: '100%' }}>
                          <Row>
                            <Col span={24}>
                              <Row justify="space-between">
                                <Col span={!isMobile ? 6 : 10}>
                                  <Checkbox value={d.value}>{d.label}</Checkbox>
                                </Col>
                                <Col span={!isMobile ? 14 : 1}>
                                {!isMobile ? d.description : null}
                                </Col>
                                <Col span={4}>${d.price}</Col>
                              </Row>
                            </Col>
                          </Row>
                        </Checkbox.Group>
                      )
                    })
                  }
                </Space>
              )
            }

          })
        }
      </Space>

  );
};

export default ProductInfo;
