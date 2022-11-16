import React, { useState } from 'react';
import { Grid, Space } from 'antd-mobile'
import { Card } from 'antd-mobile'
import { SmileFill } from 'antd-mobile-icons'

const Summary = ({formData, setFormData}) => {

  function getTotalAmount(products) {
    let totalAmount = 0;
    products.map((product, index) => {
      if (product.tag[0] === 'C') {
        totalAmount = (totalAmount + (product.price * formData.tvBoxQty))
      } else if (product.tag[0] === 'D') {
        totalAmount = (totalAmount + (product.price * formData.tvBoxQty))
      } else {
        totalAmount = (totalAmount = totalAmount + product.price)
      }
    })

    return totalAmount;
  };

  return (
    <>
      <Space direction='vertical' style={ {'--gap': '26px'} } block>
        <Card style={{ backgroundColor: '#f1f1f1' }}>
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

        <Card style={{ backgroundColor: '#f1f1f1' }}>
          <Space direction='horizontal'>
            <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>Card Holder:</span>
            <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>{formData.cardFirstName} {formData.cardLastName}</span>
          </Space>
        </Card>
        <Card style={{ backgroundColor: '#f1f1f1' }}>
          <Space direction='horizontal'>
            <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>Total(excl.tax):</span>
            <span style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>${ getTotalAmount(formData.productsDetail).toFixed(2) }</span>
          </Space>
        </Card>
      </Space>
    </>
  );
};

export default Summary;
