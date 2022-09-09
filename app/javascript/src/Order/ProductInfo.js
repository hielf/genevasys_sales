import React, { useState, useEffect } from 'react';
import {isMobile} from 'react-device-detect';
import { Divider, Checkbox, Select, Tooltip, Card, Radio, Input } from 'antd';
import { Space } from 'antd';
import { Row, Col } from 'antd';
import { HomeOutlined, WifiOutlined, PlaySquareOutlined, PhoneOutlined } from '@ant-design/icons';
import {labelStyle, dataStyle, labelStyleSmall, dataStyleSmall, boldStyle, dividerStyle} from '../Components/FormStyle'
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

  const onChangeB = (checkedValues) => {
    // console.log("B Checked:", checkedValues);
    if (formData.productBs.length !== 0) {
      setFormData((formData) => ({ ...formData, productBs: [] }));
    }
    setFormData((formData) => ({ ...formData, productBs: checkedValues }));
    bundleCheck(checkedValues, "B");
  }

  const onChangeC = (checkedValues) => {
    // console.log("C Checked:", checkedValues);
    setFormData((formData) => ({ ...formData, productCs: checkedValues }));
    bundleCheck(checkedValues, "C");
  }

  const onChangeD = (checkedValues) => {
    // console.log("D Checked:", checkedValues);
    setFormData((formData) => ({ ...formData, productDs: checkedValues }));
    bundleCheck(checkedValues, "D");
  }

  const bundleCheck = (values, type) => {
    let productBs = (type === "B" ? values : formData.productBs)
    let productCs = (type === "C" ? values : formData.productCs)
    let productDs = (type === "D" ? values : formData.productDs)

    let checkedValues = productBs.concat(productCs).concat(productDs)

    // console.log(checkedValues);

    let hasTypeB = false;
    let hasTypeC = false;
    let hasTypeD = false;

    checkedValues.map(value => {
      Object.keys(list).map(p => {
        const l = list[p]
        if ((l.filter((e) => e.value === value)).length !== 0) {
          listData.push((l.filter((e) => e.value === value))[0])
        }
      })
    })

    list["bundles"].map(bundle => {
      if (tags.every(r => bundle["tag"].includes(r)) && tags.length === bundle["tag"].length) {
        console.log("bundle", bundle["tag"]);
        console.log("tag:", tags);
        checkedValues.push(bundle.value)
        checkedValues = checkedValues.filter(item => !productBs.includes(item))
        if (productCs.length > 0 && formData.tvBoxQty <= 1) {
          checkedValues = checkedValues.filter(item => !productCs.includes(item))
        }
        if (productDs.length > 0 && formData.ipPhoneQty <= 1) {
          checkedValues = checkedValues.filter(item => !productDs.includes(item))
        }
      }
    })

    // if (formData.productCs.length != 0 && formData.tvBoxQty > 1) {
    //   checkedValues.concat(formData.productCs)
    // }
    //
    // if (formData.productDs.length != 0 && formData.ipPhoneQty > 1) {
    //   checkedValues.concat(formData.productDs)
    // }

    let listData = [];
    let hasTypeB = false;
    let hasTypeC = false;
    let hasTypeD = false;

    if (productBs.length > 0) {
      hasTypeB = true;
    }
    if (productCs.length > 0) {
      hasTypeC = true;
    }
    if (productDs.length > 0) {
      hasTypeD = true;
    }

    if (hasTypeC === true) {
      if (formData.tvBoxQty === 0) {
        setFormData((formData) => ({ ...formData, tvBoxQty: 1 }));
      }
    } else if (hasTypeC === false) {
      setFormData((formData) => ({ ...formData, tvBoxQty: 0 }));
    }

    if (hasTypeD === true) {
      if (formData.ipPhoneQty === 0) {
        setFormData((formData) => ({ ...formData, ipPhoneQty: 1 }));
      }
    } else if (hasTypeD === false) {
      setFormData((formData) => ({ ...formData, ipPhoneQty: 0 }));
    }

    checkedValues.map(value => {
      Object.keys(list).map(p => {
        const l = list[p]
        if ((l.filter((e) => e.value === value)).length !== 0) {
          listData.push((l.filter((e) => e.value === value))[0])
        }
      })
    })

    setFormData((formData) => ({ ...formData, products: checkedValues }));
    setFormData((formData) => ({ ...formData, productsDetail: listData }));
  }

  const onChange1 = (checkedValues) => {
    let listData = [];
    let hasTypeB = false;
    let hasTypeC = false;
    let hasTypeD = false;

    checkedValues.map(value => {
      Object.keys(list).map(p => {
        const l = list[p]
        if ((l.filter((e) => e.value === value)).length !== 0) {
          listData.push((l.filter((e) => e.value === value))[0])
        }
      })
    })

    listData.map(data => {
      if (data.label.indexOf('Internet') === 0) {
        hasTypeB = true;
      }
      if (data.value === '16') {
        hasTypeC = true;
      }
      if (data.value === '20' || data.label.indexOf('Bundle') >= 0) {
        hasTypeD = true;
      }
    })

    if (hasTypeC === true) {
      if (formData.tvBoxQty === 0) {
        setFormData((formData) => ({ ...formData, tvBoxQty: 1 }));
      }
    } else if (hasTypeC === false) {
      setFormData((formData) => ({ ...formData, tvBoxQty: 0 }));
    }

    if (hasTypeD === true) {
      if (formData.ipPhoneQty === 0) {
        setFormData((formData) => ({ ...formData, ipPhoneQty: 1 }));
      }
    } else if (hasTypeD === false) {
      setFormData((formData) => ({ ...formData, ipPhoneQty: 0 }));
    }

    setFormData((formData) => ({ ...formData, products: checkedValues }));
    setFormData((formData) => ({ ...formData, productsDetail: listData }));
  };

  const onChange2 = (value) => {
    setFormData({ ...formData, tvBoxQty: value });
  };

  const onChange3 = (value) => {
    setFormData({ ...formData, ipPhoneQty: value });
  };

  const onChange4 = ({ target: { value } }) => {
    setFormData({ ...formData, ipPhonePortIn: value });
  };

  const onChange5 = ({ target: { value } }) => {
    setFormData({ ...formData, ipPhonePortInNumber: value });
  };

  const onChange6 = ({ target: { value } }) => {
    setFormData({ ...formData, ipPhoneAddressOption: value });
  };

  const onChange7 = ({ target: { value } }) => {
    setFormData({ ...formData, ipPhoneAddress: value });
  };

  const icons = (p) => {
    if (p === "bundles") {
      return (
        <HomeOutlined />
      )
    } else if (p === "internets") {
      return (
        <WifiOutlined />
      )
    } else if (p === "tv_box") {
      return (
        <PlaySquareOutlined />
      )
    } else if (p === "ip_phone") {
      return (
        <PhoneOutlined />
      )
    }
  };

  const categroy = (p) => {
    if (p === "bundles") {
      return ( "Bundle" )
    } else if (p === "internets") {
      return ( "Internet" )
    } else if (p === "tv_box") {
      return ( "TV Box" )
    } else if (p === "ip_phone") {
      return ( "IP Phone" )
    }
  };

  const tvBox = (p) => {
    if (p === "tv_box") {
      return (
        <Row>
          <Col span={24}>
            <Card>
              <Space direction='horizontal' size='small'>
                <Tooltip>
                  <span style={{ fontWeight: 'bold' }}>Qty:</span>
                </Tooltip>
                <Select defaultValue={1} style={{ width: "100px" }} onChange={onChange2} value={formData.tvBoxQty}>
                  <Select.Option value={1}>1</Select.Option>
                  <Select.Option value={2}>2</Select.Option>
                  <Select.Option value={3}>3</Select.Option>
                  <Select.Option value={4}>4</Select.Option>
                  <Select.Option value={5}>5</Select.Option>
                </Select>
              </Space>
            </Card>
          </Col>
        </Row>
      )
    }
  };

  const ipPhone = (p) => {
    if (p === "ip_phone" || p === "bundles") {
      return (
        <Row>
          <Col span={24}>
            <Card>
              <Space direction='vertical' size='small'>
                <Space direction='horizontal' size='small'>
                  <Tooltip>
                    <span style={{ fontWeight: 'bold' }}>Qty:</span>
                  </Tooltip>
                  <Select defaultValue={1} style={{ width: "100px" }} onChange={onChange3} value={formData.ipPhoneQty}>
                    <Select.Option value={1}>1</Select.Option>
                    <Select.Option value={2}>2</Select.Option>
                    <Select.Option value={3}>3</Select.Option>
                    <Select.Option value={4}>4</Select.Option>
                    <Select.Option value={5}>5</Select.Option>
                  </Select>
                </Space>
                <Space direction='horizontal' size='small'>
                  <Tooltip>
                    <span style={{ fontWeight: 'bold' }}>Status:</span>
                  </Tooltip>
                  <Radio.Group name="phoneIsPortIn" defaultValue={1} onChange={onChange4} value={formData.ipPhonePortIn}>
                    <Radio value={1}>New</Radio>
                    <Radio value={2}>Port-in</Radio>
                  </Radio.Group>
                  <Input placeholder="#Port-in number"
                    bordered={false}
                    style={{ borderBottom: '1px solid rgb(0 0 0 / 6%)', borderTop:'0px', borderLeft:'0px', borderright:'0px' }}
                    disabled={formData.ipPhonePortIn === 2 ? false : true}
                    onChange={onChange5}
                    value={formData.ipPhonePortInNumber}/>
                </Space>
              </Space>
            </Card>
          </Col>
        </Row>
      )
    }
  };

  return (

      <Space direction='vertical' size='middle' style={{ display: 'flex' }}>
        {
          Object.keys(list).map(p => {
            if (p !== "bundles") {
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
                  {tvBox(p)}
                  {ipPhone(p)}
                </Space>
              )
            }

          })
        }
      </Space>

  );
};

export default ProductInfo;
