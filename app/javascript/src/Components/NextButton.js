import React from 'react';
import { Button, Radio, message, Space } from 'antd';

const success = (info) => {
  message.config({ top: 64, });
  message.success(info);
};

const error = (info) => {
  message.config({ top: 64, });
  message.error(info);
};

const warning = (info) => {
  message.config({ top: 64, });
  message.warning(info);
};

const NextButton = ({ step, setStep, FormTitles, formData }) => (
  <Button type='primary' shape='default' size='large' block
  onClick={() => {
    if (step === FormTitles.length - 1) {
      alert("FORM SUBMITTED");
    } else {
      console.log(formData);
      if (step === 0 && formData.products.length === 0) {
        error("Please choose your product")
      } else if (step === 1 && formData.dateRequest.trim() === '') {
        error("Please select service date")
      } else if (step === 2 && formData.firstName.trim() === '') {
        error("First name required")
      } else if (step === 2 && formData.lastName.trim() === '') {
        error("Last name required")
      } else if (step === 2 && formData.contactPhone.trim() === '') {
        error("Contact phone required")
      } else if (step === 2 && formData.email.trim() === '') {
        error("E-mail required")
      } else if (step === 2 && formData.installationAddress.trim() === '') {
        error("Installation address required")
      } else if (step === 2 && formData.city.trim() === '') {
        error("City required")
      } else if (step === 2 && formData.province.trim() === '') {
        error("Province required")
      } else if (step === 2 && formData.postalCode.trim() === '') {
        error("Postal Code required")
      } else if (step === 2 && formData.optionsSameAddress === 2 && formData.billingAddress.trim() === '') {
        error("Billing address required")
      } else {
        setStep((step) => step + 1);
      }

    }
      console.log(step)
    }}>
    {step === FormTitles.length - 1 ? "Submit" : "Next"}
  </Button>
);

export default NextButton;
