import React, { useState, useEffect } from 'react';
import { Grid, Space } from 'antd-mobile'
import { Card, Ellipsis, Divider, Popup, Button } from 'antd-mobile'
import { SmileFill } from 'antd-mobile-icons'
import Iframe from 'react-iframe'
import { useQuery } from '../Functions/UrlParamsUtil'
// import { Term } from '../Pages/Term'

const Summary = ({formData, setFormData}) => {

  let query = useQuery();

  const promoteCode = query.get("promote_code");
  useEffect(() => { setFormData((formData) => ({ ...formData, promoteCode: promoteCode })); }, [] )

  function getTotalAmount(products) {
    let totalAmount = 0;
    products.map((product, index) => {
      if (product.tag[0] === 'C') {
        totalAmount = (totalAmount + (product.promotion_price * formData.tvBoxQty))
      } else if (product.tag[0] === 'D') {
        totalAmount = (totalAmount + (product.promotion_price * formData.tvBoxQty))
      } else {
        totalAmount = (totalAmount = totalAmount + product.promotion_price)
      }
    })

    return totalAmount;
  };

  const ProductsDisplay = (products) => {
    return (
      <Space direction='vertical' block>
        {products.map((product, index) => {
          return (
            <Grid.Item span={8} key={ index }>
              <Space direction='horizontal'>
                <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", color: '#777777', }}>{ product.label }:</span>
                <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", position: 'absolute', right: '10%', }}>${ product.promotion_price }</span>
              </Space>
            </Grid.Item>
          )
        })}
      </Space>
    )
  };

  return (
    <>
      <Space direction='vertical' style={ {'--gap': '26px'} } block>
        <Divider
          contentPosition='left'
          style={{ color: '#777777', fontSize: "18px", fontFamily: "'Oswald', sans-serif", marginBottom: '0px', marginTop: '0px', }}>
          Information Review & Confirm
        </Divider>
        <Card title='Summary' headerStyle={{ fontSize: "18px", fontFamily: "'Oswald', sans-serif", color: '#777777', }} style={{ backgroundColor: '#f1f1f1' }}>
          <Grid columns={8}>
            <Space direction='vertical'>

              { Object.entries(formData).length > 0 ? ProductsDisplay(formData.productsDetail) : null }

              <Grid.Item span={8}>
                <Space direction='horizontal'>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", color: '#777777', }}>Total(excl.tax):</span>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", position: 'absolute', right: '10%', }}>${ getTotalAmount(formData.productsDetail).toFixed(2) }</span>
                </Space>
              </Grid.Item>
              <Grid.Item span={8}>
                <Space direction='horizontal'>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", color: '#777777', }}>Total GST/5%:</span>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", position: 'absolute', right: '10%', }}>${ (getTotalAmount(formData.productsDetail)*0.05).toFixed(2) }</span>
                </Space>
              </Grid.Item>
              <Grid.Item span={8}>
                <Space direction='horizontal'>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", color: '#777777', }}>Total PST(BC)/7%:</span>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", position: 'absolute', right: '10%', }}>${ (getTotalAmount(formData.productsDetail)*0.07).toFixed(2) }</span>
                </Space>
              </Grid.Item>
              <Grid.Item span={8}>
                <Space direction='horizontal'>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", color: '#777777', }}>Total(inc.tax):</span>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", position: 'absolute', right: '10%', }}>${ (getTotalAmount(formData.productsDetail)*1.12).toFixed(2) }</span>
                </Space>
              </Grid.Item>
              <Grid.Item span={8}>
                <Space direction='horizontal'>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", color: '#777777', }}>Total Rebate:</span>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", position: 'absolute', right: '10%', }}>(12 Months * $-10 = $-120)</span>
                </Space>
              </Grid.Item>
            </Space>
          </Grid>
        </Card>

        <Card title='Credit Card Information' headerStyle={{ fontSize: "18px", fontFamily: "'Oswald', sans-serif", color: '#777777', }} style={{ backgroundColor: '#f1f1f1' }}>
          <Grid columns={8}>
            <Space direction='vertical'>
              <Grid.Item span={8}>
                <Space direction='horizontal'>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", color: '#777777', }}>Card Number:</span>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>{formData.cardNumber}</span>
                </Space>
              </Grid.Item>
              <Grid.Item span={8}>
                <Space direction='horizontal'>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", color: '#777777', }}>Card Holder:</span>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>{formData.cardFirstName} {formData.cardLastName}</span>
                </Space>
              </Grid.Item>
            </Space>
          </Grid>
        </Card>

        <Card title='Personal Information' headerStyle={{ fontSize: "18px", fontFamily: "'Oswald', sans-serif", color: '#777777', }} style={{ backgroundColor: '#f1f1f1' }}>
          <Grid columns={8} block>
            <Space direction='vertical'>
              <Grid.Item span={8} block>
                <Space direction='horizontal'>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", color: '#777777', }}>Customer Name:</span>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>{formData.firstName} {formData.lastName}</span>
                </Space>
              </Grid.Item>
              <Grid.Item span={8} block>
                <Space direction='horizontal'>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", color: '#777777', }}>Phone Number:</span>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>{formData.contactPhone}</span>
                </Space>
              </Grid.Item>
              <Grid.Item span={8} block>
                <Space direction='horizontal' block>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", color: '#777777', }}>Installation Address:</span>
                  <Ellipsis rows={1} direction='end' expandText='.' content={formData.installationAddress + ' ' + formData.postalCode + ' ' + formData.city} style={{ maxWidth: '120px', margin: 'auto', fontFamily: "'Varela Round', sans-serif", }} />
                </Space>
              </Grid.Item>
            </Space>
          </Grid>
        </Card>

        <Popup
            visible={formData.popupVisible}
            onMaskClick={() => {
              setFormData((formData) => ({ ...formData, popupVisible: false }));
            }}
            bodyStyle={{ height: '60vh' }}
          >
            <div style={{ padding: '2%', height: '80%', }}>
              <Iframe url="/terms"
                width="100%"
                height="100%"
                id=""
                className=""
                display="block"
                position="relative"
                styles={{borderWidth: "0px"}}/>
            </div>
            <div style={{ backgroundColor: "white", position: 'fixed', zIndex: 1, width: '100%', bottom: '0px', boxShadow: '0px -2px 5px 0px #e6e6e6', WebkitBoxShadow: '0px -2px 5px 0px #e6e6e6', MozBoxShadow: '0px -2px 5px 0px #e6e6e6', }}>
              <Space direction='vertical' style={ {padding: '0 5%', width: '90%', marginTop: 85, '--gap': '24px'} }>
                <div style={ {position: 'fixed', bottom: '24px', width: '90%', marginRight: 'auto', marginLeft: 'auto', } }>
                  <Grid columns={3} gap={8}>
                    <Grid.Item>
                    </Grid.Item>
                    <Grid.Item>
                      <Button block color='primary' size='middle' type='submit' fill='outline'
                        onClick={() => {
                          setFormData((formData) => ({ ...formData, popupVisible: false }));
                          setFormData((formData) => ({ ...formData, checkAgreeMent: true }));
                        }}>
                        Agree
                      </Button>
                    </Grid.Item>
                    <Grid.Item>
                    </Grid.Item>
                  </Grid>
                </div>
              </Space>
            </div>
        </Popup>
      </Space>
    </>
  );
};

export default Summary;
