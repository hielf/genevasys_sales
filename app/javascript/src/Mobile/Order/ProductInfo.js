import React, { useState, useEffect } from 'react';
import { apiGet } from '../Functions/ApiRequest'
import { Space, Grid, Divider } from 'antd-mobile'
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

  const onChange1 = (checkedValues) => {
    console.log("Checked:", checkedValues);
    setFormData((formData) => ({ ...formData, productAs: [checkedValues] }));
    setFormData((formData) => ({ ...formData, products: [checkedValues] }));
  }

  return (
    <>
      <Space direction='vertical' style={ {'--gap': '32px'} }>
        <Divider
          contentPosition='center'
          style={{ color: '#777777', fontSize: "18px", fontFamily: "'Oswald', sans-serif", marginBottom: '0px', marginTop: '0px', }}>
          Choose Bundle
        </Divider>
        {
          Object.keys(list).map(p => {
            if (p == "bundles") {
              return (
                <Space direction='vertical' key={ 'space_key_' + p } style={{ '--gap': '24px' }} block>
                  <Radio.Group value={formData.products[0]} onChange={ onChange1 }>
                    <Space direction='vertical' style={{ '--gap': '24px' }} block>
                    {
                      list[p].map(d => {
                        return (
                          <Badge key={ d.value } color='#ff6800' content={ d.bundle_tag } style={{ '--right': '97%', }} bordered>
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
                                  <span style={{ fontSize: "24px", color: "#ff6800" }}>{ d.promotion_price }</span>
                                  <br/>
                                  <span style={{ fontSize: "14px", textDecoration:"line-through", color: "#8f8f8f", textDecorationColor: "#a1a1a1", textDecorationThickness: "0.5px",}}>{ d.price }</span>
                                </Grid.Item>
                              </Grid>
                            </Radio>
                          </Badge>
                        )
                      })
                    }
                    </Space>
                  </Radio.Group>

                  <Space direction='vertical' size='small'>
                    <p style={{ fontSize: "12px", margin: '0', }}>
                      * An Activation Fee may be charged for providing internet installation service.
                    </p>
                    <p style={{ fontSize: "12px", margin: '0', }}>
                      * If Activation Fee is available, A $10 Rebate will be provided for 12 months.
                    </p>
                  </Space>
                </Space>
              )
            }
          })
        }
      </Space>
    </>
  );
};

export default ProductInfo;
