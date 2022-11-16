import React, { useState } from 'react';
import { Grid, Space } from 'antd-mobile'
import { Card } from 'antd-mobile'
import { SmileFill } from 'antd-mobile-icons'

const Summary = ({formData, setFormData}) => {

  return (
    <>
      <Space direction='vertical' style={ {'--gap': '26px'} }>
        <Card style={{ backgroundColor: '#f1f1f1' }}>
        <Grid columns={8}>
          <Grid.Item span={8}>
            <p style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>Card Number:</p>
            <p style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>{formData.cardNumber}</p>
          </Grid.Item>
          <Grid.Item span={8}>
            <p style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>Card Holder:</p>
            <p style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>{formData.cardFirstName} {formData.cardLastName}</p>
          </Grid.Item>
        </Grid>
        </Card>

        <Card style={{ backgroundColor: '#f1f1f1' }}>
          <Space direction='horizontal'>
            <p style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>Card Holder:</p>
            <p style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>{formData.cardFirstName} {formData.cardLastName}</p>
          </Space>
        </Card>
        <Card style={{ backgroundColor: '#f1f1f1' }}>
          <Space direction='horizontal'>
            <p style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>Expiry:</p>
            <p style={{ margin: 'auto', fontFamily: "'Varela Round', sans-serif", }}>{formData.mm} / {formData.yy}</p>
          </Space>
        </Card>
      </Space>
    </>
  );
};

export default Summary;
