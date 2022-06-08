import React from 'react';
import { Divider, Checkbox } from 'antd';
import { Space } from 'antd';
import { Row, Col } from 'antd';

const onChange = (checkedValues) => {
  console.log('products = ', checkedValues);
};

const list = {
  Bundle: [
    {
      label: 'Internet + TV Box + IP Phone 75: $55.95/month',
      value: 'A1',
    },
    {
      label: 'Internet + TV Box + IP Phone 300: $85.95/month',
      value: 'A2',
    },
    {
      label: 'Internet + TV Box + IP Phone 750: $105.95/month',
      value: 'A3',
    },
    {
      label: 'Internet + TV Box + IP Phone 750: $105.95/month',
      value: 'A4',
    },
  ],
  Internet: [
    {
      label: 'Internet 75: $55.95/month',
      value: 'A5',
    },
    {
      label: 'Internet 300: $85.95/month',
      value: 'A6',
    },
    {
      label: 'Internet 750: $105.95/month',
      value: 'A7',
    },
    {
      label: 'Internet 750: $105.95/month',
      value: 'A8',
    },
  ],
  'TV Box': [
    {
      label: 'TV Box 75: $55.95/month',
      value: 'A9',
    },
    {
      label: 'TV Box 300: $85.95/month',
      value: 'A21',
    },
    {
      label: 'TV Box 750: $105.95/month',
      value: 'A31',
    },
    {
      label: 'TV Box 750: $105.95/month',
      value: 'A41',
    },
  ],
  'IP Phone': [
    {
      label: 'IP Phone 75: $55.95/month',
      value: 'A111',
    },
    {
      label: 'IP Phone 300: $85.95/month',
      value: 'A211',
    },
    {
      label: 'IP Phone 750: $105.95/month',
      value: 'A311',
    },
    {
      label: 'IP Phone 750: $105.95/month',
      value: 'A411',
    },
  ],
};

const ProductInfo = ({formData, setFormData}) => (
  <>
    <Checkbox.Group onChange={onChange} style={{ width: '100%' }}>
      <Space direction='vertical' size='middle' style={{ display: 'flex' }}>
        {
          Object.keys(list).map(p => {
            return (
              <Space direction='vertical' size='middle' key={ 'space_key_' + p } style={{ display: 'flex' }}>
                <Divider orientation='left'>{p}</Divider>
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
              </Space>
            )
          })
        }
      </Space>
    </Checkbox.Group>
  </>
);

export default ProductInfo;
