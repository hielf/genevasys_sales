import React, { useState, useRef, useEffect } from 'react'
import { Space, Result, Card, Footer } from 'antd-mobile'
import HeaderTitle from '../Components/HeaderTitle'
import { apiGet } from '../Functions/ApiRequest'
import { SmileOutline } from 'antd-mobile-icons'
import QRCode from 'react-qr-code'
import { CameraOutline } from 'antd-mobile-icons'

const ResultForm = () => {
  const componentRef = useRef();
  const handleData = () => {
    console.log(componentRef.current.props.formData);
    // window.open(componentRef.current.props.formData["pdf_file"], "_blank")
  };

  const [formData, setFormData] = useState({});

  const id = window.location.search.split("=")[1]

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await apiGet('orders/' + id, []);
    setFormData(res.order);
  };

  const qr_code = () => {
    return (
      <div style={{ height: "256px", margin: "0 auto", width: "256px", }}>
          <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={ 'http://127.0.0.1:3000/order/submit?id=93' }
          viewBox={`0 0 256 256`}
          />
      </div>
    )
  };

  const title = () => {
    return (
      <p style={{ fontFamily: "'Oswald', sans-serif", }}>
        Congratulations!
      </p>
    )
  };

  const description = () => {
    return (
      <>
        <p style={{ color: '#777777', fontFamily: "'Varela Round', sans-serif", }}>
          You have earned 3 reward opportunities!
        </p>
        <p style={{ color: '#777777', fontFamily: "'Varela Round', sans-serif", fontSize: "var(--adm-font-size-4)" }}>
          Send the QR code to new users to get $5 per month for 12 months after each registration succeeded.
        </p>
      </>
    )
  };

  return (
    <div style={{ backgroundColor: 'var(--adm-color-primary)', height: '100vh', }}>
      <Space direction='vertical' style={{ padding: '5% 5%', width: '90%', }}>
        <Result
          status='success'
          icon={ qr_code() }
          title={ title() }
          description={ description() }
        />
        <div style={{ fontFamily: "'Varela Round', sans-serif", color: '#FFFFFF', }}>
          <CameraOutline /> take a ScreenShoot to save the QR Code
        </div>
      </Space>
      <div style={{ backgroundColor: "white", position: 'fixed', zIndex: 1, width: '100%', bottom: '0px', }}>
        <Footer content='Customer Service: 778-786-3838'></Footer>
        <Footer content='@ 2022 Geneva Systems All rights reserved'></Footer>
      </div>
    </div>
  );
}


export default ResultForm;
