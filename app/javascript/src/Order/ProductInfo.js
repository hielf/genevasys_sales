import React from 'react';
import { Divider, Checkbox, Select, Tooltip, Card, Radio, Input } from 'antd';
import { Space } from 'antd';
import { Row, Col } from 'antd';
import { HomeOutlined, WifiOutlined, PlaySquareOutlined, PhoneOutlined } from '@ant-design/icons';


const ProductInfo = ({formData, setFormData}) => {

  const onChange1 = (checkedValues) => {
    setFormData({ ...formData, products: checkedValues })
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
    if (p === "Bundle") {
      return (
        <HomeOutlined />
      )
    } else if (p === "Internet") {
      return (
        <WifiOutlined />
      )
    } else if (p === "TV Box") {
      return (
        <PlaySquareOutlined />
      )
    } else if (p === "IP Phone") {
      return (
        <PhoneOutlined />
      )
    }
  };

  const tvBox = (p) => {
    if (p === "TV Box") {
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
    if (p === "IP Phone") {
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
                <Space direction='horizontal' size='small'>
                  <Tooltip>
                    <span style={{ fontWeight: 'bold' }}>Address:</span>
                  </Tooltip>
                  <Radio.Group name="ipPhoneAddressOption" defaultValue={1} onChange={onChange6} value={formData.ipPhoneAddressOption}>
                    <Radio value={1}>Same</Radio>
                    <Radio value={2}>Other</Radio>
                  </Radio.Group>
                  <Input placeholder="#Address"
                    bordered={false}
                    style={{ borderBottom: '1px solid rgb(0 0 0 / 6%)', borderTop:'0px', borderLeft:'0px', borderright:'0px' }}
                    disabled={formData.ipPhoneAddressOption === 2 ? false : true}
                    onChange={onChange7}
                    value={formData.ipPhoneAddress}/>
                </Space>
              </Space>
            </Card>
          </Col>
        </Row>
      )
    }
  };

  const list = {
    Bundle: [
      {
        label: 'Internet + TV Box + IP Phone 75: $55.95/month',
        value: 'A1',
        price: 55.95,
      },
      {
        label: 'Internet + TV Box + IP Phone 300: $85.95/month',
        value: 'A2',
        price: 155.95,
      },
      {
        label: 'Internet + TV Box + IP Phone 750: $105.95/month',
        value: 'A3',
        price: 255.95,
      },
      {
        label: 'Internet + TV Box + IP Phone 1000: $105.95/month',
        value: 'A4',
        price: 355.95,
      },
    ],
    Internet: [
      {
        label: 'Internet 75: $55.95/month',
        value: 'A5',
        price: 55.95,
      },
      {
        label: 'Internet 300: $85.95/month',
        value: 'A6',
        price: 515.95,
      },
      {
        label: 'Internet 750: $105.95/month',
        value: 'A7',
        price: 525.95,
      },
      {
        label: 'Internet 1000: $105.95/month',
        value: 'A8',
        price: 535.95,
      },
    ],
    'TV Box': [
      {
        label: 'Rent Box 75: $10.00/month',
        value: 'A9',
        price: 15.95,
      },
      {
        label: 'Buy TV Box: $300',
        value: 'A21',
        price: 55.95,
      },
    ],
    'IP Phone': [
      {
        label: 'IP Phone Rental: 10.95/month',
        value: 'A111',
        price: 15.95,
      },
    ],
  };

  return (
    <Checkbox.Group
    onChange={onChange1}
    value={formData.products}
    style={{ width: '100%' }}>
      <Space direction='vertical' size='middle' style={{ display: 'flex' }}>
        {
          Object.keys(list).map(p => {
            return (
              <Space direction='vertical' size='middle' key={ 'space_key_' + p } style={{ display: 'flex' }}>
                <Divider orientation='left'>
                  <Space direction='horizontal' size='small' >
                    {icons(p)}{p}
                  </Space>
                </Divider>
                {
                  list[p].map(d => {
                    return (
                      <Row key={d.value}>
                        <Col span={24}>
                          <Checkbox value={d.value}>{d.label}</Checkbox>
                        </Col>
                      </Row>
                    )
                  })
                }
                {tvBox(p)}
                {ipPhone(p)}
              </Space>
            )
          })
        }
      </Space>
    </Checkbox.Group>
  );
};

export default ProductInfo;
