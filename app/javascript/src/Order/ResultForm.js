import React from 'react';
import {isMobile} from 'react-device-detect';
import { Space, Layout, Typography } from 'antd';
import { Row, Col } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import HeaderTitle from '../Components/HeaderTitle'

function ResultForm() {
  const { Header, Footer, Sider, Content } = Layout;

  const HeaderTitleDisplay = () => {
    return <HeaderTitle step={-1} FormTitles={""} />;
  };

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor:"#ffffff", }}>
      <Header style={{ backgroundColor: "#90BA75", position: 'fixed', zIndex: 1, width: '100%', }}>
        { HeaderTitleDisplay() }
      </Header>
      <Space direction="vertical" size="large" style={{ display: 'flex', }}>
        <Content style={
          isMobile ? {
             padding: '0 50px', marginTop: 64
          } : {
             padding: '0 17.5%', marginTop: 64
          }
        }>
          <Result
            icon={<SmileOutlined />}
            title="Great, we have done all the operations!"
            extra={<Button size="large" type="primary">Print the Form</Button>}
          />
        </Content>
        <div />
      </Space>
      <Footer style={{ textAlign: 'center', backgroundColor:"#ffffff" }}>
        {!isMobile ? ('©2022 Geneva Systems Ltd.') : null}
      </Footer>
    </Layout>

  );
}


export default ResultForm;
