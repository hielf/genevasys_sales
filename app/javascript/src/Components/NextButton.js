import React from 'react';
import { Button, Radio, message, Space } from 'antd';

const success = (info) => {
  message.success(info);
};

const error = (info) => {
  message.config({ top: 64, });
  message.error(info);
};

const warning = () => {
  message.warning('This is a warning message');
};

const NextButton = ({ step, setStep, FormTitles, formData }) => (
  <Button type='primary' shape='default' size='large' href='#' block
  onClick={() => {
    if (step === FormTitles.length - 1) {
      alert("FORM SUBMITTED");
      console.log(formData);
    } else {
      setStep((step) => step + 1);
    }
      console.log(step)
      error(step)
    }}>
    {step === FormTitles.length - 1 ? "Submit" : "Next"}
  </Button>
);

export default NextButton;
