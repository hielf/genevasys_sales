module ThirdPartiesHelper

  def new_third_party(params)
    flag = true
    ref = params["ref"]
    third_party_id = nil

    if ThirdParty.find_by(ref: ref).nil?
      begin
        third_party = ThirdParty.new(
          params.except("socialnetworks",
                        "idprof1",
                        "idprof2",
                        "idprof3",
                        "idprof4",
                        "idprof5",
                        "idprof6",
                        "localtax1_assuj",
                        "localtax1_value",
                        "localtax2_assuj",
                        "localtax2_value",
                        "mode_reglement_supplier_id",
                        "cond_reglement_supplier_id",
                        "transport_mode_supplier_id",
                        "code_client",
                        "code_fournisseur",
                        "code_compta_client",
                        "code_compta",
                        "accountancy_code_customer",
                        "code_compta_fournisseur",
                        "accountancy_code_supplier",
                        "code_compta_product",
                        "status_prospect_label",
                        "multicurrency_code",
                        "partnerships",
                        "validateFieldsErrors",
                        "array_options",
                        "array_languages",
                        "barcode_type",
                        "barcode_type_coder",
                        "mode_reglement_id",
                        "cond_reglement_id",
                        "demand_reason_id",
                        "transport_mode_id",
                        "shipping_method_id",
                        "absolute_discount",
                        "absolute_creditnote"))
        third_party.save
      rescue Exception => e
        flag = false
        Rails.logger.warn "new_third_party error: #{e.message}"
      ensure
        third_party_id = third_party.id if flag == true
      end

    else
      third_party = ThirdParty.find_by(ref: ref)
      begin
        third_party.update(
          params.except("socialnetworks",
                        "idprof1",
                        "idprof2",
                        "idprof3",
                        "idprof4",
                        "idprof5",
                        "idprof6",
                        "localtax1_assuj",
                        "localtax1_value",
                        "localtax2_assuj",
                        "localtax2_value",
                        "mode_reglement_supplier_id",
                        "cond_reglement_supplier_id",
                        "transport_mode_supplier_id",
                        "code_client",
                        "code_fournisseur",
                        "code_compta_client",
                        "code_compta",
                        "accountancy_code_customer",
                        "code_compta_fournisseur",
                        "accountancy_code_supplier",
                        "code_compta_product",
                        "status_prospect_label",
                        "multicurrency_code",
                        "partnerships",
                        "validateFieldsErrors",
                        "array_options",
                        "array_languages",
                        "barcode_type",
                        "barcode_type_coder",
                        "mode_reglement_id",
                        "cond_reglement_id",
                        "demand_reason_id",
                        "transport_mode_id",
                        "shipping_method_id",
                        "absolute_discount",
                        "absolute_creditnote"))
      rescue Exception => e
        flag = false
        Rails.logger.warn "new_third_party error: #{e.message}"
      ensure
        third_party_id = third_party.id if flag == true
      end
    end

    return flag, third_party_id
  end

  # ApplicationController.helpers.init_third_parties
  def init_third_parties
    count = 0
    params = {limit: 0}
    status, data = ApplicationController.helpers.dolibarr_thirdparties(params)
    data.each do |params|
      flag, third_party_id = ApplicationController.helpers.new_third_party(params)
      break if flag == false
      count = count + 1
    end;0

    p count
  end

  def create_third_party(params)
    p params
    flag = false
    third_party_id = nil
    id = nil
    exist_cust = ThirdParty.find_by(email: params[:email], name: params[:name])

    if exist_cust.nil?
      query = {sortfield: "t.rowid", sortorder: "DESC", limit: 1}
      status, data = ApplicationController.helpers.dolibarr_thirdparties(query)
      code_client = data.first["code_client"].to_i + 1 if status == 200
      params[:code_client] = code_client

      method = "/thirdparties"
      status, data = ApplicationController.helpers.dolibarr_api_post(method, params)
      id = data if status == 200
    else
      id = exist_cust.ref
    end

    if id
      status, data = ApplicationController.helpers.dolibarr_thirdparty(id)
      flag, third_party_id = ApplicationController.helpers.new_third_party(data) if status == 200
    end

    return flag, third_party_id
  end

end
