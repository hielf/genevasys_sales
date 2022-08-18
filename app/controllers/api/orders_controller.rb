class Api::OrdersController < Api::ApplicationController
  skip_before_action :authenticate_user!, only: [:submit, :test, :show, :order_pdf]

  def test
    code = params[:promoteCode] ? params[:promoteCode] : "0"
    result = [0, 'success', {:message => "ok", :code => code}]

    render_json(result)
  end

  def show
    m_requires! [:id]

    # 50.times do
    #
    #
    #   if !@order.pdf_file.nil?
    #     break
    #   else
    #     sleep 0.5
    #   end
    # end
    @order = Order.find_by(id: params[:id])
    @pdf_url = "#{request.protocol}#{request.host}:#{request.port}/api/orders/order_pdf?file=#{@order.pdf_file}"
  end

  def order_pdf
    m_requires! [:file]
    file = params[:file]

    File.open("#{Rails.root.to_s}/tmp/data/#{file}", 'r') do |f|
      send_data f.read.force_encoding('BINARY'), :filename => file, :type => "application/pdf", :disposition => "inline"
    end
    # send_data("#{Rails.root.to_s}/tmp/data/#{file}", filename: file, type: 'application/pdf', :disposition => 'inline')
  end

  def submit
    m_requires! [:promoteCode]
    result = [1, 'failed', nil]
    user = User.find_by(promote_code: params[:promoteCode])
    if user.nil?
      result = [1, 'Promote Code incorrect', nil]
    else
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
          OrderCreateJob.perform_now order.id
          result = [0, 'success', order]
        end
      rescue Exception => ex
        result= [1, ex.message, nil]
      end
    end

    render_json(result)
  end

end
