import React, { useState, useRef, useEffect } from 'react'
import { Space, Result, Card, Footer, Empty, Button, Toast } from 'antd-mobile'
import HeaderTitle from '../Components/HeaderTitle'
import { apiGet } from '../Functions/ApiRequest'
import { SmileOutline } from 'antd-mobile-icons'
import QRCode from 'react-qr-code'
import { CameraOutline, LoopOutline } from 'antd-mobile-icons'

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

  const copy = (url) => {
    navigator.clipboard.writeText(url);

    Toast.show({
      icon: 'success',
      content: "Link Copied",
      duration: '3000',
    })
  };

  const qr_code = (formData) => {
    console.log("formData", formData);
    if (Object.keys(formData).length === 0) {
      return (
        <div style={{ height: "256px", margin: "0 auto", width: "256px", textAlign: "center", }}>
            <Empty
              style={{ padding: '64px 0' }}
              image={
                <LoopOutline
                  style={{
                    color: 'var(--adm-color-light)',
                    fontSize: 48,
                  }}
                />
              }
              description='Loading..'
            />
        </div>
      )
    } else {
      let url = formData["cust_user_url"];
      return (
        <div style={{ height: "256px", margin: "0 auto", width: "256px", }}>
            <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={ url }
            viewBox={`0 0 256 256`}
            />
        </div>
      )
    }
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
          You have earned<span style={{ textDecoration: 'underline' }}> 5 </span>reward opportunities!
        </p>
        <p style={{ color: '#777777', fontFamily: "'Varela Round', sans-serif", fontSize: "var(--adm-font-size-4)" }}>
          Send the QR code to new users or <a onClick={() => { copy(formData["cust_user_url"]) }} style={{ fontSize: 'var(--adm-font-size-4)', fontFamily: "'Varela Round', sans-serif", }}>copy link</a> to get<span style={{ textDecoration: 'underline' }}> $5 per month</span> for 12 months after each registration succeeded.
        </p>
      </>
    )
  };

  return (
    <div style={{ backgroundColor: 'var(--adm-color-primary)', height: '100vh', }}>
      <Space direction='vertical' style={{ padding: '5% 5%', width: '90%', }}>
        <Result
          status='success'
          icon={ qr_code(formData) }
          title={ title() }
          description={ description() }
        />
        <div style={{ fontFamily: "'Varela Round', sans-serif", color: '#FFFFFF', }}>
          <CameraOutline /> take a ScreenShoot to save the QR Code
        </div>
      </Space>
      <div style={{ backgroundColor: "white", position: 'fixed', zIndex: 1, width: '100%', bottom: '0px', }}>
        <Space direction='vertical' style={ {'--gap': '6px'} } block>
          <span/>
          <Footer content='Customer Service: 778-786-3838'></Footer>
          <Footer content='@ 2022 Geneva Systems All rights reserved'></Footer>
          <span/>
        </Space>
      </div>
    </div>
  );
}


export default ResultForm;
