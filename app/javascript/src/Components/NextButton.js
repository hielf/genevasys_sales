import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, message } from 'antd';

const NextButton = ({ step, setStep, FormTitles, formData }) => {
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

  const display = (step, FormTitles) => {
    if (step === FormTitles.length - 1) {
      return (
        <span>Submit</span>
      )
    } else {
      return (
        <span>Next</span>
      )
    }
  };


  const history = useHistory();

  return (
    <Button
    type='primary'
    shape='default'
    size='large'
    block
    onClick={() => {
      if (step === FormTitles.length - 1) {
        if (step === 4 && formData.promoteCode.trim() === '') {
          error("Promote Code required")
        } else if (step === 4 && formData.checkAgreeMent !== true) {
          error("Please check user agreement")
        } else {
          history.push("/order/submit");
        }
      } else {
        console.log(formData);
        const d = new Date();
        if (step === 0 && formData.products.length === 0) {
          error("Please choose your product")
        } else if (step === 1 && formData.dateRequest === '') {
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
        } else if (step === 3 && formData.cardFirstName.trim() === '') {
          error("First name required")
        } else if (step === 3 && formData.cardLastName.trim() === '') {
          error("Last name required")
        } else if (step === 3 && formData.cardNumber.trim() === '') {
          error("Card number required")
        } else if (step === 3 && formData.mm.trim() === '') {
          error("MM required")
        } else if (step === 3 && formData.yy.trim() === '') {
          error("YY required")
        } else if (step === 3 && formData.cvv.trim() === '') {
          error("CVV required")
        } else if (step === 3 && formData.mm.trim().length !== 2) {
          error("MM is invalid")
        } else if (step === 3 && formData.yy.trim().length !== 2) {
          error("YY is invalid")
        } else if (step === 3 && Number(formData.mm) > 12) {
          error("MM is invalid")
        } else if (step === 3 && parseInt(formData.yy) < (d.getFullYear() % 100)) {
          error("YY is invalid")
        } else if (step === 3 && formData.cvv.trim().length !== 3) {
          error("CVV is invalid")
        } else {
          setStep((step) => step + 1);
        }
      }
        console.log(step)
      }}>
      { display(step, FormTitles) }
    </Button>
  );
};

export default NextButton;
