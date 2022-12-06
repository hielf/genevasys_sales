import React from 'react';
import { Divider } from 'antd';

const HeaderTitle = ({step, FormTitles}) => {
  const TitleDisplay = (step, FormTitles) => {
    if (step >= 0) {
      const num = (step + 1).toString()
      return (num + '. ' + FormTitles[step])
    } else {
      return ('Congratulation')
    }
  };

  return (
    <Divider style={{ color: "#ffffff", borderTopColor: "#90BA75", }}>
      {
        TitleDisplay(step, FormTitles)
      }
    </Divider>
  );
};

export default HeaderTitle;
