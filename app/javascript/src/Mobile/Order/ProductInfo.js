import React, { useState, useEffect } from 'react';
import { apiGet } from '../Functions/ApiRequest'
import { Space, Grid, Divider } from 'antd-mobile'
import { Radio, Badge } from 'antd-mobile'
import { CheckOutline } from 'antd-mobile-icons'

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

  const descriptionSanitize = (description) => {
    let descriptions = description.split("\r\n")

    return (
      <Space direction='vertical' style={ {'--gap': '6px', fontSize: "14px", color: "#8f8f8f", } }>
        { descriptions.map(d => {
          return (
            <p key={ d } style={{ margin: '0px', fontFamily: "'Varela Round', sans-serif", }}><CheckOutline style={{ fontSize: "10px", }} /> { d }</p>
          )
        }) }
      </Space>
    )
  };

  const onChange1 = (values) => {
    let listData = [];
    let tags = [];
    let checkedValues = [values];

    checkedValues.map(value => {
      Object.keys(list).map(p => {
        const l = list[p]
        if ((l.filter((e) => e.value === value)).length !== 0) {
          tags.push(...(l.filter((e) => e.value === value))[0]["tag"])
        }
      })
    })

    console.log("tags:", tags);
    console.log("Checked:", checkedValues);

    if (tags.includes('E')) {
      checkedValues.push(list['fee'][0].value)
    }

    if (tags.includes('F')) {
      checkedValues.push(list['rebate'][0].value)
    }

    checkedValues.map(value => {
      Object.keys(list).map(p => {
        const l = list[p]
        if ((l.filter((e) => e.value === value)).length !== 0) {
          listData.push((l.filter((e) => e.value === value))[0])
        }
      })
    })

    // setFormData((formData) => ({ ...formData, productAs: [checkedValues] }));
    setFormData((formData) => ({ ...formData, products: checkedValues }));
    setFormData((formData) => ({ ...formData, productsDetail: listData }));
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
                            <Radio value={d.value} block style={{ borderStyle: "solid", borderWidth: "0.5px", borderColor: "#ccc", borderRadius: "10px", padding: "8px" }}>
                              <Grid columns={8} gap={8}>
                                <Grid.Item span={8}>
                                  <p style={{ width: "80vw", marginTop: "8px", marginBottom: "0px", fontFamily: "'Oswald', sans-serif", }}>{d.label}</p>
                                </Grid.Item>
                                <Grid.Item span={5}>
                                  <Grid columns={5} gap={3}>
                                    <Grid.Item span={5}>
                                      { descriptionSanitize(d.description) }
                                    </Grid.Item>
                                  </Grid>
                                </Grid.Item>
                                <Grid.Item span={3} style={{ alignSelf: "center", textAlign: "right", }}>
                                  <span style={{ fontSize: "14px", fontFamily: "'Varela Round', sans-serif", color: "#ff6800" }}>$</span>
                                  <span style={{ fontSize: "24px", fontFamily: "'Oswald', sans-serif", color: "#ff6800" }}>{ d.promotion_price }</span>
                                  <br/>
                                  <span style={{ fontSize: "14px", fontFamily: "'Oswald', sans-serif", textDecoration:"line-through", color: "#8f8f8f", textDecorationColor: "#a1a1a1", textDecorationThickness: "0.5px",}}>{ d.price }</span>
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
