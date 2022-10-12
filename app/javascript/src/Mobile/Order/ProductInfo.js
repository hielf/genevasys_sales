import React, { useState, useEffect } from 'react';
import { apiGet } from '../Functions/ApiRequest'
import { Space, Grid } from 'antd-mobile'
import { Radio } from 'antd-mobile'

const ProductInfo = ({formData, setFormData}) => {

  const [list, setList] = useState({});
  console.log(list);
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const res = await apiGet('products?for_customer=1', []);
    setList(res);
  };

  return (

      <Space direction='vertical' size='large'>
        {
          Object.keys(list).map(p => {
            if (p == "bundles") {
              return (
                <Space direction='vertical' key={ 'space_key_' + p } block>
                  <Radio.Group>
                    <Space direction='vertical' block>
                    {
                      list[p].map(d => {
                        return (
                          <Radio key={ d.value } value={d.value}>
                            <Grid columns={3} gap={8}>
                              <Grid.Item span={2}>
                                <span>{d.label}</span>
                              </Grid.Item>
                              <Grid.Item>
                                <span>{ d.price }</span>
                              </Grid.Item>
                            </Grid>
                            <Grid columns={3} gap={8}>
                              <Grid.Item span={3}>
                                <span style={{ fontSize: "14px" }}>{ d.description }</span>
                              </Grid.Item>
                            </Grid>
                          </Radio>
                        )
                      })
                    }
                    </Space>
                  </Radio.Group>
                </Space>
              )
            }
          })
        }
      </Space>

  );
};

export default ProductInfo;
