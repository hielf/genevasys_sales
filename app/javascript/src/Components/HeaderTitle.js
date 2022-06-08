import React from 'react';
import { Divider } from 'antd';

const HeaderTitle = ({step, FormTitles}) => (
  <>
    <Divider style={{ color: "#ffffff", borderTopColor: "#90BA75", }}>
      { FormTitles[step] }
    </Divider>
  </>
);

export default HeaderTitle;
