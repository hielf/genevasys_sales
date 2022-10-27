import React, { useState, useEffect } from 'react';
import { Space, Grid } from 'antd-mobile'
import { PickerView } from 'antd-mobile'

const ServiceInfo = ({formData, setFormData}) => {

  const d1 = new Date();
  const d2 = new Date();
  const dates = [];
  d2.setDate(d2.getDate() + 60);

  while (d1 <= d2) {
    d1.setDate(d1.getDate() + 1)
    dates.push({ label: d1.toLocaleString('en', { month: 'short' }).toString() + ', ' + d1.getDate().toString(), value: (new Date(d1))});
  }

  const periods = [
    { label: 'Morning', value: 1 },
    { label: 'Afternoon', value: 2 },
  ]
  const [dateColumns, setDateColumns] = useState([dates, periods])

  if (formData.dateRequest === "") {
    setFormData((formData) => ({ ...formData, dateRequest: dates[2]["value"] }));
    setFormData((formData) => ({ ...formData, installationTime: 1 }));
  }

  const onChange1 = (val, extend) => {
    setFormData((formData) => ({ ...formData, dateRequest: val[0] }));
    setFormData((formData) => ({ ...formData, installationTime: val[1] }));
  }

  return (
      <Space direction='vertical' block>
        <p style={{ fontSize: "var(--adm-font-size-8)", textAlign: "center", fontWeight: 'bold', }}>Choose Date</p>
        <PickerView
          columns={dateColumns}
          value={
            [formData.dateRequest, formData.installationTime]
          }
          onChange={(val, extend) => {
            onChange1(val, extend)
            console.log('onChange', val, extend.items)
          }}
        />
        <p style={{ fontSize: "var(--adm-font-size-4)", }}>* A representative will call you later to confirm the installation time.</p>
      </Space>
  );
};

export default ServiceInfo;
