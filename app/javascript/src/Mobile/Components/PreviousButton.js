import React from 'react';
import { Button, message } from 'antd-mobile';

const PreviousButton = ({ step, setStep, FormTitles }) => (
  <Button block shape='default' size='middle' color='default'
  disabled={step == 0}
  onClick={() => {
    setStep((step) => step - 1);
    console.log(step)
    }}>
    Back
  </Button>
);

export default PreviousButton;
