json.status 0
json.message 'success'

json.data do
  json.order do
    json.id                               @order.id
    json.products                         @order.products
    json.productsDetail                   (JSON.parse @order.products).map{|product| {label: Product.find_by(product_id: product).label, value: Product.find_by(product_id: product).product_id, price: Product.find_by(product_id: product).price.to_f}}
    json.tvBoxQty                         @order.tv_box_qty
    json.ipPhoneQty                       @order.ip_phone_qty
    json.ipPhonePortIn                    @order.ip_phone_port_in
    json.ipPhonePortInNumber              @order.ip_phone_port_in_number
    json.ipPhoneAddressOption             @order.ip_phone_address_option
    json.ipPhoneAddress                   @order.ip_phone_address
    json.installationTime                 @order.installation_time
    json.dateRequest                      @order.date_request
    json.firstName                        @order.first_name
    json.middleName                       @order.middle_name
    json.lastName                         @order.last_name
    json.contactPhone                     @order.contact_phone
    json.altPhone                         @order.alt_phone
    json.email                            @order.email
    json.installationAddress              @order.installation_address
    json.city                             @order.city
    json.province                         @order.province
    json.postalCode                       @order.postal_code
    json.optionsUnitType                  @order.options_unit_type
    json.buzz                             @order.buzz
    json.optionsSameAddress               @order.options_same_address
    json.billingAddress                   @order.billing_address
    json.optionsCardType                  @order.options_card_type
    json.cardFirstName                    @order.card_first_name
    json.cardLastName                     @order.card_last_name
    json.cardNumber                       @order.card_number.gsub(/.(?=.{4})/,'*')
    json.mm                               @order.mm
    json.yy                               @order.yy
    json.cvv                              "***"
    json.firstInitialPayment              nil
    json.recurrentPayment                 nil
    json.cardRegistrationAddress          @order.card_registration_ddress
    json.checkAgreeMent                   @order.check_agreement
    json.promoteCode                      @order.promote_code
    json.additionalRequirements           @order.additional_requirements
    json.pdf_file                         @pdf_url
  end
end
