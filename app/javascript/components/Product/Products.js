import React from 'react';
import { Space, Layout, List, Typography, Divider } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const Products = () => (
  <>
    <Layout>
      <Header style={{ backgroundColor: "#69c0ff", }}>
        <div className="logo" />
      </Header>
      <Content style={{ padding: '0 50px', backgroundColor:"#ffffff" }}>
        <Divider orientation="left">Default Size</Divider>
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor:"#ffffff" }}> ©2022 Geneva Systems Ltd.</Footer>
    </Layout>

  </>
);

export default Products;
