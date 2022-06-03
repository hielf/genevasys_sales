import React from 'react';
import { Button, Radio } from 'antd';

const PreviousButton = ({ step, setStep, FormTitles }) => (
  <Button shape='default' size='large' href='#' block
  disabled={step == 0}
  onClick={() => {
    setStep((step) => step - 1);
    console.log(step)
    }}>
    Back
  </Button>
);

export default PreviousButton;
