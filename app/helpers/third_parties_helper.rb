module ThirdPartiesHelper

  def new_third_party(params)
    flag = true
    ref = params["ref"]

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
                        "shipping_method_id"))
        third_party.save
      rescue Exception => e
        flag = false
        Rails.logger.warn "new_third_party error: #{e.message}"
      end
    end

    return flag
  end

  # ApplicationController.helpers.init_third_parties
  def init_third_parties
    count = 0
    status, data = ApplicationController.helpers.dolibarr_thirdparties
    data.each do |params|
      flag = ApplicationController.helpers.new_third_party(params)
      break if flag == false
      count = count + 1
    end;0

    p count
  end

end