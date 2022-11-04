import React, { useState } from 'react';
import { Space, Grid } from 'antd-mobile'
import { Divider, PickerView } from 'antd-mobile'

const ServiceInfo = ({formData, setFormData}) => {

  const d1 = new Date();
  const d2 = new Date();
  const dates = [];
  d2.setDate(d2.getDate() + 60);

  while (d1 <= d2) {
    d1.setDate(d1.getDate() + 1)
    dates.push({ label: d1.toLocaleString('en', { month: 'short' }).toString() + ', ' + d1.getDate().toString(), value: (new Date(d1)).toDateString()});
  }

  const periods = [
    { label: 'Morning', value: 1 },
    { label: 'Afternoon', value: 2 },
  ]
  const [dateColumns, setDateColumns] = useState([dates, periods])

  const [preDate, setPreDate] = useState([dates[2]["value"], '1'])

  const onChange1 = (val, extend) => {
    setFormData((formData) => ({ ...formData, dateRequest: val[0] }));
    setFormData((formData) => ({ ...formData, installationTime: val[1] }));
  }

  return (
      <Space direction='vertical' style={ {'--gap': '0px'} } block>
        <Divider
          contentPosition='center'
          style={{ color: '#777777', fontSize: "18px", fontFamily: "'Oswald', sans-serif", marginBottom: '0px', marginTop: '0px', }}>
          Book A Service Date
        </Divider>
        <PickerView
          columns={dateColumns}
          value={
            (formData.dateRequest === "") ? preDate : [formData.dateRequest, formData.installationTime]
          }
          onChange={(val, extend) => {
            onChange1(val, extend)
            console.log('onChange', val, extend.items)
          }}
        />
        <p style={{ fontSize: "14px", }}>* A representative will call you later to confirm the installation time.</p>
      </Space>
  );
};

export default ServiceInfo;
