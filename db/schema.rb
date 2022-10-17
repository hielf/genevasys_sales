# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_10_17_211653) do

  create_table "contacts", charset: "utf8mb3", force: :cascade do |t|
    t.integer "third_party_id"
    t.string "address"
    t.string "zip"
    t.string "town"
    t.string "state_id"
    t.string "socid"
    t.string "email"
    t.string "statut"
    t.string "phone_pro"
    t.string "ref"
    t.string "country_id"
    t.string "country_code"
    t.string "lastname"
    t.string "firstname"
    t.string "socname"
    t.string "mail"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["third_party_id"], name: "index_contacts_on_third_party_id"
  end

  create_table "op_logs", charset: "utf8mb3", force: :cascade do |t|
    t.integer "user_id"
    t.string "op_type"
    t.string "op_message"
    t.datetime "op_time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_op_logs_on_user_id"
  end

  create_table "orders", charset: "utf8mb3", force: :cascade do |t|
    t.integer "user_id"
    t.string "status"
    t.string "products"
    t.integer "tv_box_qty"
    t.integer "ip_phone_qty"
    t.integer "ip_phone_port_in"
    t.string "ip_phone_port_in_number"
    t.integer "ip_phone_address_option"
    t.string "ip_phone_address"
    t.integer "installation_time"
    t.date "date_request"
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.string "contact_phone"
    t.string "alt_phone"
    t.string "email"
    t.string "installation_address"
    t.string "city"
    t.string "province"
    t.string "postal_code"
    t.integer "options_unit_type"
    t.string "buzz"
    t.integer "options_same_address"
    t.string "billing_address"
    t.integer "options_card_type"
    t.string "card_first_name"
    t.string "card_last_name"
    t.string "card_number"
    t.string "mm"
    t.string "yy"
    t.string "cvv"
    t.string "first_initial_payment"
    t.string "recurrent_payment"
    t.string "card_registration_ddress"
    t.boolean "check_agreement"
    t.string "promote_code"
    t.string "additional_requirements"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "retry_times", default: 0
    t.string "pdf_file"
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "product_rels", charset: "utf8mb3", force: :cascade do |t|
    t.string "upper_product_id"
    t.string "lower_product_id"
    t.date "start_date"
    t.date "end_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["upper_product_id", "lower_product_id"], name: "index_product_rels_on_upper_product_id_and_lower_product_id", unique: true
    t.index ["upper_product_id"], name: "index_product_rels_on_upper_product_id"
  end

  create_table "products", charset: "utf8mb3", force: :cascade do |t|
    t.string "product_id"
    t.string "label"
    t.string "description"
    t.string "product_type"
    t.decimal "price", precision: 10, scale: 2
    t.decimal "price_ttc", precision: 10, scale: 2
    t.decimal "tva_tx", precision: 10, scale: 2
    t.decimal "localtax1_tx", precision: 10, scale: 2
    t.string "status"
    t.string "ref"
    t.boolean "visible", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "customer_purchase_available", default: false
    t.index ["product_id"], name: "index_products_on_product_id", unique: true
  end

  create_table "sms", charset: "utf8mb3", force: :cascade do |t|
    t.string "mobile"
    t.string "verify_code"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "third_parties", charset: "utf8mb3", force: :cascade do |t|
    t.string "entity"
    t.string "name"
    t.string "name_alias"
    t.string "address"
    t.string "zip"
    t.string "town"
    t.string "status"
    t.string "state_id"
    t.string "phone"
    t.string "fax"
    t.string "email"
    t.string "url"
    t.string "barcode"
    t.string "tva_assuj"
    t.string "tva_intra"
    t.string "managers"
    t.string "capital"
    t.string "typent_id"
    t.string "typent_code"
    t.string "effectif"
    t.string "effectif_id"
    t.string "forme_juridique_code"
    t.string "forme_juridique"
    t.string "remise_percent"
    t.string "remise_supplier_percent"
    t.string "fk_prospectlevel"
    t.integer "date_modification"
    t.string "user_modification"
    t.integer "date_creation"
    t.string "user_creation"
    t.string "client"
    t.string "prospect"
    t.string "fournisseur"
    t.string "note_private"
    t.string "note_public"
    t.string "stcomm_id"
    t.string "stcomm_picto"
    t.string "contacted"
    t.integer "price_level"
    t.string "outstanding_limit"
    t.string "order_min_amount"
    t.string "supplier_order_min_amount"
    t.string "parent"
    t.string "default_lang"
    t.string "ref"
    t.string "ref_ext"
    t.string "import_key"
    t.string "webservices_url"
    t.string "webservices_key"
    t.string "logo"
    t.string "logo_small"
    t.string "logo_mini"
    t.string "logo_squarred"
    t.string "logo_squarred_small"
    t.string "logo_squarred_mini"
    t.string "accountancy_code_sell"
    t.string "accountancy_code_buy"
    t.string "fk_multicurrency"
    t.string "fk_warehouse"
    t.string "multicurrency_codeCAD"
    t.string "bank_account"
    t.string "linkedObjectsIds"
    t.string "canvas"
    t.string "fk_project"
    t.string "contact_id"
    t.string "user"
    t.string "origin"
    t.string "origin_id"
    t.string "statut"
    t.string "country_id"
    t.string "country_code"
    t.string "region_id"
    t.string "model_pdf"
    t.string "last_main_doc"
    t.string "fk_bank"
    t.string "fk_account"
    t.string "lastname"
    t.string "firstname"
    t.string "civility_id"
    t.integer "date_validation"
    t.string "specimen"
    t.string "fk_incoterms"
    t.string "label_incoterms"
    t.string "location_incoterms"
    t.string "promote_code"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", charset: "utf8mb3", force: :cascade do |t|
    t.string "nickname", limit: 100
    t.string "password_digest"
    t.string "mobile"
    t.string "access_token"
    t.string "promote_code", limit: 250
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.string "current_sign_in_ip", limit: 50
    t.datetime "last_sign_in_at"
    t.string "last_sign_in_ip", limit: 50
    t.integer "failed_attempts"
    t.datetime "locked_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "ref"
    t.string "statut"
    t.string "employee"
    t.string "email"
    t.string "user_name"
    t.string "lastname"
    t.string "firstname"
    t.index ["access_token"], name: "index_users_on_access_token"
  end

end
