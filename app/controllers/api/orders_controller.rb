class Api::OrdersController < Api::ApplicationController
  skip_before_action :authenticate_user!, only: [:submit]

  def submit
    m_requires! [:promoteCode]
    result = [1, 'failed', nil]
    user = User.find_by(promote_code: params[:promoteCode])
    p user
    begin
      order = user.orders.new(products: params[:products],
                              tv_box_qty: params[:tvBoxQty],
                              ip_phone_qty: params[:ipPhoneQty],
                              ip_phone_port_in: params[:ipPhonePortIn],
                              ip_phone_port_in_number: params[:ipPhonePortInNumber],
                              ip_phone_address_option: params[:ipPhoneAddressOption],
                              ip_phone_address: params[:ipPhoneAddress],
                              installation_time: params[:installationTime],
                              date_request: params[:dateRequest],
                              first_name: params[:firstName],
                              middle_name: params[:middleName],
                              last_name: params[:lastName],
                              contact_phone: params[:contactPhone],
                              alt_phone: params[:altPhone],
                              email: params[:email],
                              installation_address: params[:installationAddress],
                              city: params[:city],
                              province: params[:province],
                              postal_code: params[:postalCode],
                              options_unit_type: params[:optionsUnitType],
                              buzz: params[:buzz],
                              options_same_address: params[:optionsSameAddress],
                              billing_address: params[:billingAddress],
                              options_card_type: params[:optionsCardType],
                              card_first_name: params[:cardFirstName],
                              card_last_name: params[:cardLastName],
                              card_number: params[:cardNumber],
                              mm: params[:mm],
                              yy: params[:yy],
                              cvv: params[:cvv],
                              card_registration_ddress: params[:cardRegistrationAddress],
                              check_agreement: params[:checkAgreeMent],
                              promote_code: params[:promoteCode],
                              additional_requirements: params[:additionalRequirements])

      if order.save
        result = [0, 'success', order]
      end
    rescue Exception => ex
      result= [1, ex.message, nil]
    end

    render_json(result)
  end

  def notify
    result = Hash.from_xml(request.body.read)["xml"]
    order = Order.find_by(out_trade_no: result["out_trade_no"])

    if WxPay::Sign.verify?(result)
      if order.pay
        Subscribtion.transaction do
          user = order.user
          package = order.package
          start_date = user.subscribtions.maximum(:end_date).nil? ? Date.today : user.subscribtions.maximum(:end_date)
          end_date = start_date + package.date_num
          user.subscribtions.create!(start_date: start_date, end_date: end_date, package_type: package.package_type, watch_num: package.watch_num, note:package.desc)
        end
      end
      render :xml => {return_code: "SUCCESS"}.to_xml(root: 'xml', dasherize: false)
    else
      order.cancel
      render :xml => {return_code: "FAIL", return_msg: "签名失败"}.to_xml(root: 'xml', dasherize: false)
    end
  end

end
