import React, { useState, useRef, useEffect } from 'react'
import { Result, Footer } from 'antd-mobile'
import HeaderTitle from '../Components/HeaderTitle'
import { apiGet } from '../Functions/ApiRequest'
import { SmileOutline } from 'antd-mobile-icons'

const ResultForm = () => {
  const componentRef = useRef();
  const handlePdf = () => {
    // console.log(componentRef.current.props.formData);
    window.open(componentRef.current.props.formData["pdf_file"], "_blank")
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

  return (
    <>
      <Result
        status='success'
        icon={<SmileOutline />}
        title='Congratulations!'
        description='Please take a ScreenShoot to save the QR Code'
      />
      <Footer content='Customer Service Line: 778-786-3838'></Footer>
      <Footer content='@ 2022 Geneva Systems All rights reserved'></Footer>
    </>
  );
}


export default ResultForm;
