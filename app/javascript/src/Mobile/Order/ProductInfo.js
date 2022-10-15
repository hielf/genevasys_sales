import React, { useState, useEffect } from 'react';
import { apiGet } from '../Functions/ApiRequest'
import { Space, Grid } from 'antd-mobile'
import { Radio, Badge } from 'antd-mobile'

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
                <Space direction='vertical' key={ 'space_key_' + p } style={{ '--gap': '24px' }} block>
                  <Radio.Group>
                    <Space direction='vertical' style={{ '--gap': '24px' }} block>
                    {
                      list[p].map(d => {
                        return (
                          <Badge key={ d.value } color='#d46417' content={ d.bundle_tag } style={{ '--right': '97%', }} bordered>
                            <Radio value={d.value} style={{ borderStyle: "solid", borderWidth: "0.5px", borderColor: "#ccc", borderRadius: "10px", padding: "8px" }} block>
                              <Grid columns={4} gap={8}>
                                <Grid.Item span={3}>
                                  <Grid columns={5} gap={3}>
                                    <Grid.Item span={5}>
                                      <span>{d.label}</span>
                                    </Grid.Item>
                                    <Grid.Item span={5}>
                                      <span style={{ fontSize: "14px", color: "#8f8f8f" }}>{ d.description }</span>
                                    </Grid.Item>
                                  </Grid>
                                </Grid.Item>
                                <Grid.Item span={1} style={{ alignSelf: "center" }}>
                                  <span style={{ fontSize: "24px", color: "#d46417" }}>{ d.price }</span>
                                  <br/>
                                  <span style={{ fontSize: "12px", textDecoration:"line-through", color: "#8f8f8f", }}>{ d.price }</span>
                                </Grid.Item>
                              </Grid>
                            </Radio>
                          </Badge>
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
