import React from 'react';
import {isMobile} from 'react-device-detect';
import { Space, Layout, Typography } from 'antd';

function Term() {
  return (
    <>
      <Layout style={{ minHeight: "100vh", backgroundColor:"#ffffff", }}>
        <Typography>
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            Please note once a representative has received your online order we will perform a search to verify we can deliver cable internet service to your address. Next using the contact information provided a Geneva will call to verify a convenient install date along with your billing information. There will be no charges if we cannot provide service to your address. Cable Internet Speeds posted are maximum speeds provided and can fluctuate.
            I acknowledge that this is a prepaid service. The first month and hardware sales will be charged today. All monthly fees are payable on or before the 1st of each service month.
            Once an order has been confirmed, it can only be cancelled within 24 hours. Once provisioning and activation is complete the account becomes active immediately and billing commences immediately. Due to technical reasons this cannot be delayed.
            All prices as well as other aspects of our services are subject to change without notice.
            To show your acceptance of and willingness to be bound by the terms and conditions listed on our website, please add you signature in the provided panel, then tick the box "I AGREE" above and click Submit at the bottom of this form. Click here to view our complete Terms and Conditions.
            Prices indicated for the various plans (with the exception of monthly specials) do not include one month deposit, applicable taxes, tariffs, $15.00 set-up fee or the $4.95 per month network access fee. All prices as well as other aspects of our services are subject to change without notice.
          </Space>
        </Typography>
      </Layout>
    </>

  );
}


export default Term;
