import React from 'react';
import { Button, Radio } from 'antd';

const NextButton = ({ step, setStep, FormTitles, formData }) => (
  <Button type='primary' shape='default' size='large' href='#' block
  onClick={() => {
    if (step === FormTitles.length - 1) {
      alert("FORM SUBMITTED");
      // console.log(formData);
    } else {
      setStep((step) => step + 1);
    }
    console.log(step)
    if (step === FormTitles.length - 1) {
      console.log(formData)
    }
    }}>
    {step === FormTitles.length - 1 ? "Submit" : "Next"}
  </Button>
);

export default NextButton;
