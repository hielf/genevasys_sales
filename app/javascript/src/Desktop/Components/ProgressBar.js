import React from 'react';
import { Progress } from 'antd';
import { Affix } from 'antd';

const ProgressBar = ({progress, FormTitles}) => (
  <>
    <Affix offsetTop={64} onChange={(affixed) => console.log(affixed)}>
      <Progress percent={Math.round(100/(FormTitles.length-1)*(progress))} />
    </Affix>
  </>
);

export default ProgressBar;
