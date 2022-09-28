import React, { useState } from 'react'
// import 'antd-mobile/es/global'
// import Button from 'antd-mobile/es/components/button'
import { Button, Modal } from 'antd-mobile'

function OrderForm() {
  const { Header, Footer, Sider, Content } = Layout;
  const { Title, Paragraph, Text, Link } = Typography;
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    products: [],
    productsDetail: [],
    tvBoxQty: 0,
    ipPhoneQty: 0,
    ipPhonePortIn: 1,
    ipPhonePortInNumber: "",
    ipPhoneAddressOption: 1,
    ipPhoneAddress: "",
    installationTime: 1,
    dateRequest: "",
    firstName: "",
    middleName: "",
    lastName: "",
    contactPhone: "",
    altPhone: "",
    email: "",
    installationAddress: "",
    city: "VANCOUVER",
    province: "BC",
    postalCode: "",
    optionsUnitType: 1,
    buzz: "",
    optionsSameAddress: 1,
    billingAddress: "",
    optionsCardType: 1,
    cardFirstName: "",
    cardLastName: "",
    cardNumber: "",
    mm: "",
    yy: "",
    cvv: "",
    firstInitialPayment: "",
    recurrentPayment: "",
    cardRegistrationAddress: "",
    checkAgreeMent: false,
    promoteCode: "",
    additionalRequirements: "",
    productAs: [],
    productBs: [],
    productCs: [],
    productDs: [],
    tvBoxQtySelected: 0,
    ipPhoneQtySelected: 0,
  });

  const FormTitles = ["Choose Product", "Service Time", "Customer Info", "Payment Info", "Review"];

  return (
    <>
      <div>123123</div>
    </>

  );
}


export default OrderForm;
