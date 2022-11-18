import React, { useState } from 'react';
import { Grid, Space } from 'antd-mobile'
import { Card, Ellipsis, Divider } from 'antd-mobile'
import { SmileFill } from 'antd-mobile-icons'

const Summary = ({formData, setFormData}) => {

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
                <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>{ product.label }:</span>
                <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>${ product.promotion_price }</span>
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
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>Total(excl.tax):</span>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>${ getTotalAmount(formData.productsDetail).toFixed(2) }</span>
                </Space>
              </Grid.Item>
              <Grid.Item span={8}>
                <Space direction='horizontal'>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>Total GST/5%:</span>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>${ (getTotalAmount(formData.productsDetail)*0.05).toFixed(2) }</span>
                </Space>
              </Grid.Item>
              <Grid.Item span={8}>
                <Space direction='horizontal'>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>Total PST(BC)/7%:</span>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>${ (getTotalAmount(formData.productsDetail)*0.07).toFixed(2) }</span>
                </Space>
              </Grid.Item>
              <Grid.Item span={8}>
                <Space direction='horizontal'>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>Total(inc.tax):</span>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>${ (getTotalAmount(formData.productsDetail)*1.12).toFixed(2) }</span>
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
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>Card Number:</span>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>{formData.cardNumber}</span>
                </Space>
              </Grid.Item>
              <Grid.Item span={8}>
                <Space direction='horizontal'>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>Card Holder:</span>
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
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>Customer Name:</span>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>{formData.firstName} {formData.lastName}</span>
                </Space>
              </Grid.Item>
              <Grid.Item span={8} block>
                <Space direction='horizontal'>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>Phone Number:</span>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>{formData.contactPhone}</span>
                </Space>
              </Grid.Item>
              <Grid.Item span={8} block>
                <Space direction='horizontal' block>
                  <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>Installation Address:</span>
                  <Ellipsis rows={1} direction='end' expandText='..' content={formData.installationAddress + ' ' + formData.postalCode + ' ' + formData.city} style={{ maxWidth: 'fit-content', margin: 'auto', fontFamily: "'Varela Round', sans-serif", }} />
                </Space>
              </Grid.Item>
            </Space>
          </Grid>
        </Card>

      </Space>
    </>
  );
};

export default Summary;
