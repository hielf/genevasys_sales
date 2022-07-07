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

ActiveRecord::Schema.define(version: 2022_07_07_215225) do

  create_table "op_logs", charset: "utf8mb3", force: :cascade do |t|
    t.integer "user_id"
    t.string "op_type"
    t.string "op_message"
    t.datetime "op_time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_op_logs_on_user_id"
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
    t.index ["product_id"], name: "index_products_on_product_id", unique: true
  end

  create_table "sms", charset: "utf8mb3", force: :cascade do |t|
    t.string "mobile"
    t.string "verify_code"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", charset: "utf8mb3", force: :cascade do |t|
    t.string "nickname", limit: 100
    t.string "password_digest"
    t.string "mobile"
    t.string "access_token"
    t.string "promotional_code", limit: 6
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.string "current_sign_in_ip", limit: 50
    t.datetime "last_sign_in_at"
    t.string "last_sign_in_ip", limit: 50
    t.integer "failed_attempts"
    t.datetime "locked_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["access_token"], name: "index_users_on_access_token"
    t.index ["mobile"], name: "index_users_on_mobile", unique: true
  end

end
