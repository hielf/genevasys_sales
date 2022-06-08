import React, { useState } from 'react';
import { Alert } from 'antd';
import { Affix } from 'antd';

const AlertBar = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <Affix offsetTop={64} onChange={(affixed) => console.log(affixed)}>
      <div style={{ padding: '5px 0' }}>
        {visible ? (
          <Alert message="Alert Message Text" type="error" closable afterClose={handleClose} showIcon />
        ) : null}
      </div>
    </Affix>
  );
};

export default AlertBar;
