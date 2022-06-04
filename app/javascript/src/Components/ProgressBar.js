import React from 'react';
import { Progress } from 'antd';

const ProgressBar = (progress, FormTitles) => (
  <>
    <Progress percent={Math.round(100/FormTitles.length - 1*(progress.progress))} />
  </>
);

export default ProgressBar;
