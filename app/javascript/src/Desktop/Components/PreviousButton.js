import React from 'react';
import { Button, message } from 'antd';

const PreviousButton = ({ step, setStep, FormTitles }) => (
  <Button shape='default' size='large' block
  disabled={step == 0}
  onClick={() => {
    setStep((step) => step - 1);
    console.log(step)
    }}>
    Back
  </Button>
);

export default PreviousButton;
