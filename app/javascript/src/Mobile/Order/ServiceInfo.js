import React, { useState, useEffect } from 'react';
import { Space, Grid } from 'antd-mobile'
import { PickerView } from 'antd-mobile'

const ServiceInfo = ({formData, setFormData}) => {

  const onChange1 = (checkedValues) => {

  }

  const dateColumns => {
    let d1 = new Date();
    let d2 = new Date(d1.setMonth(d1.getMonth() + 1));
  }

  const basicColumns = [
    [
      { label: 'Tue, 25', value: 'Tue, 25 Oct 2022' },
      { label: 'Tue, 26', value: 'Tue, 26 Oct 2022' },
      { label: 'Tue, 27', value: 'Tue, 27 Oct 2022' },
      { label: 'Tue, 28', value: 'Tue, 28 Oct 2022' },
      { label: 'Tue, 29', value: 'Tue, 29 Oct 2022' },
      { label: 'Tue, 30', value: 'Tue, 30 Oct 2022' },
      { label: 'Tue, 31', value: 'Tue, 31 Oct 2022' },
      { label: 'Tue, 32', value: 'Tue, 32 Oct 2022' },
      { label: 'Tue, 33', value: 'Tue, 33 Oct 2022' },
      { label: 'Tue, 34', value: 'Tue, 34 Oct 2022' },
    ],
    [
      { label: 'Morning', value: '1' },
      { label: 'Afternoon', value: '2' },
    ],
  ]

  return (
      <Space direction='vertical' block>
        <p style={{ fontSize: "var(--adm-font-size-8)", textAlign: "center", fontWeight: 'bold', }}>Choose Date</p>
        <PickerView columns={basicColumns} />
        <p style={{ fontSize: "var(--adm-font-size-4)", }}>* A representative will call you later to confirm the installation time.</p>
      </Space>
  );
};

export default ServiceInfo;
