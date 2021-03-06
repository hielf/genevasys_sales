<Typography>
  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
    <Divider orientation="center">
      Customer Information
    </Divider>
    <Row justify="space-between center">
      <Col span={8}>
        <Space direction='horizontal' size='small' >
          <span style={labelStyle}>First Name:</span>
          <span style={dataStyle}>{ formData.firstName }</span>
        </Space>
      </Col>
      <Col span={8}>
        <Space direction='horizontal' size='small' >
          <span style={labelStyle}>Middle Name:</span>
          <span style={dataStyle}>{ formData.middleName }</span>
        </Space>
      </Col>
      <Col span={8}>
        <Space direction='horizontal' size='small' >
          <span style={labelStyle}>Last Name:</span>
          <span style={dataStyle}>{ formData.lastName }</span>
        </Space>
      </Col>
    </Row>
    <Row justify="space-between center">
      <Col span={8}>
        <Space direction='horizontal' size='small' >
          <span style={labelStyle}>Contact Phone:</span>
          <span style={dataStyle}>{ formData.contactPhone }</span>
        </Space>
      </Col>
      <Col span={8}>
        <Space direction='horizontal' size='small' >
          <span style={labelStyle}>Alt. Phone:</span>
          <span style={dataStyle}>{ formData.altPhone }</span>
        </Space>
      </Col>
      <Col span={8}>
        <Space direction='horizontal' size='small' >
          <span style={labelStyle}>E-mail:</span>
          <span style={dataStyle}>{ formData.email }</span>
        </Space>
      </Col>
    </Row>
    <Row justify="space-between center">
      <Col span={24}>
        <Space direction='horizontal' size='small' >
          <span style={labelStyle}>Installation Address:</span>
          <span style={dataStyle}>{ formData.installationAddress }</span>
        </Space>
      </Col>
    </Row>
    <Row justify="space-between center">
      <Col span={8}>
        <Space direction='horizontal' size='small' >
          <span style={labelStyle}>Unit Type:</span>
          <span style={dataStyle}>{ UnitType(formData.optionsUnitType) }</span>
        </Space>
      </Col>
      <Col span={8}>
        <Space direction='horizontal' size='small' >
          <span style={labelStyle}>Buzz #:</span>
          <span style={dataStyle}>{ formData.buzz }</span>
        </Space>
      </Col>
    </Row>
    <Row justify="space-between center">
      <Col span={8}>
        <Space direction='horizontal' size='small' >
          <span style={labelStyle}>City/Town:</span>
          <span style={dataStyle}>{ formData.city }</span>
        </Space>
      </Col>
      <Col span={8}>
        <Space direction='horizontal' size='small' >
          <span style={labelStyle}>Province:</span>
          <span style={dataStyle}>{ formData.province }</span>
        </Space>
      </Col>
      <Col span={8}>
        <Space direction='horizontal' size='small' >
          <span style={labelStyle}>Postal Code:</span>
          <span style={dataStyle}>{ formData.postalCode }</span>
        </Space>
      </Col>
    </Row>
    <Row justify="space-between center">
      <Col span={24}>
        <Space direction='horizontal' size='small' >
          <span style={labelStyle}>Billing Address:</span>
          <span style={dataStyle}>{ formData.billingAddress }</span>
        </Space>
      </Col>
    </Row>

    <Divider orientation="center">
      Product Request
    </Divider>
    { ProductsQtyDisplay(formData.productsDetail) }
    { IpPhoneInfoDisplay() }

    <Divider orientation="center">
      Service Request
    </Divider>
    <Row justify="space-between center">
      <Col span={8}>
        <Space direction='horizontal' size='small' >
          <span style={labelStyle}>Preferred delivery Time:</span>
          <span style={dataStyle}>{ InstallationTime(formData.installationTime) }</span>
        </Space>
      </Col>
      <Col span={8}>
        <Space direction='horizontal' size='small' >
          <span style={labelStyle}>Planed Date:</span>
          <span style={dataStyle}>{ formData.dateRequest !== "" ? formData.dateRequest.format('DD/MMM/YYYY') : "" }</span>
        </Space>
      </Col>
    </Row>

    <Divider orientation="center">
      Pre-Authorized Payment Information
    </Divider>
    <Row justify="space-between center">
      <Col span={8}>
        <Space direction='horizontal' size='small' >
          <span style={labelStyle}>Card Type:</span>
          <span style={dataStyle}>{ CardType(formData.optionsCardType) }</span>
        </Space>
      </Col>
    </Row>
    <Row justify="space-between center">
      <Col span={8}>
        <Space direction='horizontal' size='small' >
          <span style={labelStyle}>Card Holder's First Name:</span>
          <span style={dataStyle}>{ formData.cardFirstName }</span>
        </Space>
      </Col>
      <Col span={8}>
        <Space direction='horizontal' size='small' >
          <span style={labelStyle}>Last Name:</span>
          <span style={dataStyle}>{ formData.cardLastName }</span>
        </Space>
      </Col>
    </Row>
    <Row justify="space-between center">
      <Col span={24}>
        <Space direction='horizontal' size='small' >
          <span style={labelStyle}>Card Number:</span>
          <span style={dataStyle}>{ formData.cardNumber }</span>
        </Space>
      </Col>
    </Row>
    <Row justify="space-between center">
      <Col span={8}>
        <Space direction='horizontal' size='small' >
          <span style={labelStyle}>Expiry Date:</span>
          <span style={dataStyle}>{ formData.mm }/{ formData.yy }</span>
        </Space>
      </Col>
      <Col span={8}>
        <Space direction='horizontal' size='small' >
          <span style={labelStyle}>CVV:</span>
          <span style={dataStyle}>{ "***" }</span>
        </Space>
      </Col>
    </Row>
    <Row justify="space-between center">
      <Col span={24}>
        <Space direction='horizontal' size='small' >
          <span style={labelStyle}>Credit Card Registration Address:</span>
          <span style={dataStyle}>{ formData.cardRegistrationAddress }</span>
        </Space>
      </Col>
    </Row>
  </Space>
</Typography>
