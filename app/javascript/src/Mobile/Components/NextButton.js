import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Toast } from 'antd-mobile';
import { apiPost } from '../Functions/ApiRequest'

const NextButton = ({ step, setStep, FormTitles, formData, setFormData }) => {
  const [res, setRes] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  useEffect(() => {
    // console.log("err_ue:", err);
    if (err !== '') {
      error(err)
    }
  }, [err]);

  useEffect(() => {
    if (step === FormTitles.length - 1 && err === '') {
      // console.log("res_ue:", res);
      if (res !== null) {
        history.push({
          pathname: "/order/submit",
          search: '?id=' + res.id
        });
      }
    }
  }, [res]);

  const success = (info) => {
    Toast.show({
      content: info,
      afterClose: () => {
        console.log('after')
      },
    })
  };

  const error = (info) => {
    Toast.show({
      content: info,
      afterClose: () => {
        console.log('after')
      },
    })
  };

  const warning = (info) => {
    Toast.show({
      content: info,
      afterClose: () => {
        console.log('after')
      },
    })
  };

  const display = (step, FormTitles) => {
    if (step === FormTitles.length - 1) {
      if (formData.checkAgreeMent == false) {
        return (
          <span>Confirm</span>
        )
      } else {
        return (
          <span>Submit</span>
        )
      }
    } else {
      return (
        <span>Next</span>
      )
    }
  };

  const handleSubmit = async () => {
    try {
      setErr('');
      setIsLoading(true);

      const {data} = await apiPost('orders/submit', formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
      // console.log(data);
      // console.log(JSON.stringify(data));
      // console.log(JSON.stringify(data, null, 4));
      setRes(data.data);
      if (data.status === 1) {
        // console.log(data);
        setErr(data.message);
      }
    } catch (e) {
      setErr(e.message);
    } finally {
      setIsLoading(false);
    }
  };


  const history = useHistory();

  return (
    <Button block
    color='primary'
    size='middle'
    type='submit'
    loading={ isLoading }
    onClick={() => {
      if (step === FormTitles.length - 1) {
        if (step === 4 && formData.promoteCode === null) {
          error("Promote Code required")
        } else if (step === 4 && formData.checkAgreeMent !== true) {
          // error("Please check user agreement")
          setFormData((formData) => ({ ...formData, checkAgreeMent: false }));
          setFormData((formData) => ({ ...formData, popupVisible: true }));
          // displayTerm();
        } else {
          console.log(formData);
          handleSubmit();
        }
      } else {
        if (step === 0) {
          let productCQty = (formData.productAs.length === 1 && formData.tvBoxQtySelected > 1) ? formData.tvBoxQtySelected - 1 : formData.tvBoxQtySelected;
          let productDQty = (formData.productAs.length === 1 && formData.ipPhoneQtySelected > 1) ? formData.ipPhoneQtySelected - 1 : formData.ipPhoneQtySelected;
          // console.log("formData.productAs.length ", formData.productAs.length, "formData.tvBoxQtySelected", formData.tvBoxQtySelected, "productCQty", productCQty);
          // console.log("productDQty", productDQty);
          setFormData((formData) => ({ ...formData, tvBoxQty: productCQty }));
          setFormData((formData) => ({ ...formData, ipPhoneQty: productDQty }));
        }
        console.log(formData);
        const d = new Date();
        if (step === 0 && formData.products.length === 0) {
          error("Choose Product")
        } else if (step === 1 && formData.dateRequest === '') {
          error("Select Date")
        } else if (step === 2 && formData.firstName.trim() === '') {
          error("First Name Required")
        } else if (step === 2 && formData.lastName.trim() === '') {
          error("Last Name Required")
        } else if (step === 2 && formData.contactPhone.trim() === '') {
          error("Contact phone required")
        } else if (step === 2 && formData.contactPhone.length !== 14) {
          error("Phone Number invalid")
        } else if (step === 2 && formData.email.trim() === '') {
          error("E-mail required")
        } else if (step === 2 && (formData.email.indexOf('@') === -1 || formData.email.indexOf('.') === -1)) {
          error("E-mail invalid")
        } else if (step === 2 && formData.installationAddress.trim() === '') {
          error("Installation address required")
        } else if (step === 2 && formData.city.trim() === '') {
          error("City required")
        } else if (step === 2 && formData.province.trim() === '') {
          error("Province required")
        } else if (step === 2 && formData.postalCode.trim() === '') {
          error("Postal Code required")
        } else if (step === 2 && formData.postalCode.trim().length !== 7) {
          error("Postal Code invalid")
        } else if (step === 2 && formData.optionsSameAddress === 2 && formData.billingAddress.trim() === '') {
          error("Billing address required")
        } else if (step === 3 && formData.cardFirstName.trim() === '') {
          error("First name required")
        } else if (step === 3 && formData.cardLastName.trim() === '') {
          error("Last name required")
        } else if (step === 3 && formData.cardNumber.trim() === '') {
          error("Card number required")
        } else if (step === 3 && formData.cardNumber.trim().length < 15) {
          error("Card number invalid")
        } else if (step === 3 && formData.mm.trim() === '') {
          error("Expiry Date required")
        } else if (step === 3 && formData.yy.trim() === '') {
          error("Expiry Date required")
        } else if (step === 3 && formData.cvv.trim() === '') {
          error("CVV required")
        } else if (step === 3 && formData.mm.trim().length !== 2) {
          error("MM is invalid")
        } else if (step === 3 && formData.yy.trim().length !== 4) {
          error("YY is invalid")
        } else if (step === 3 && Number(formData.mm) > 12) {
          error("MM is invalid")
        } else if (step === 3 && parseInt(formData.yy) < d.getFullYear()) {
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
