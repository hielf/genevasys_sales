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

ActiveRecord::Schema.define(version: 2021_07_19_093654) do

  create_table "active_storage_attachments", charset: "utf8", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", charset: "utf8", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", charset: "utf8", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "op_logs", charset: "utf8", force: :cascade do |t|
    t.integer "user_id"
    t.string "op_type"
    t.string "op_message"
    t.datetime "op_time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_op_logs_on_user_id"
  end

  create_table "orders", charset: "utf8", force: :cascade do |t|
    t.integer "user_id"
    t.integer "package_id"
    t.decimal "amount", precision: 10, scale: 2
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "out_trade_no"
    t.index ["out_trade_no"], name: "index_orders_on_out_trade_no"
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "packages", charset: "utf8", force: :cascade do |t|
    t.string "title"
    t.string "period"
    t.decimal "market_price", precision: 10, scale: 2
    t.decimal "discount", precision: 3, scale: 2
    t.decimal "real_price", precision: 10, scale: 2
    t.string "package_type"
    t.string "desc"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "date_num", default: 30
    t.integer "watch_num"
  end

  create_table "push_notifications", charset: "utf8", force: :cascade do |t|
    t.integer "user_id"
    t.string "note_type"
    t.string "status"
    t.string "stock_code"
    t.string "stock_display_name"
    t.string "duration"
    t.datetime "begin_time"
    t.datetime "end_time"
    t.datetime "send_time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "stock_analyse_id"
    t.index ["status"], name: "index_push_notifications_on_status"
    t.index ["user_id"], name: "index_push_notifications_on_user_id"
  end

  create_table "sms", charset: "utf8", force: :cascade do |t|
    t.string "mobile"
    t.string "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "message_type"
  end

  create_table "stock_analyses", charset: "utf8", force: :cascade do |t|
    t.string "stock_code"
    t.string "duration"
    t.string "params"
    t.string "results"
    t.float "profit_ratio"
    t.datetime "begin_time"
    t.datetime "end_time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "stock_display_name"
    t.index ["stock_code"], name: "index_stock_analyses_on_stock_code"
  end

  create_table "stock_lists", charset: "utf8", force: :cascade do |t|
    t.string "stock_code"
    t.string "stock_display_name"
    t.string "stock_name"
    t.string "market_code"
    t.string "market"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["stock_code"], name: "index_stock_lists_on_stock_code"
    t.index ["stock_display_name"], name: "index_stock_lists_on_stock_display_name"
    t.index ["stock_name"], name: "index_stock_lists_on_stock_name"
  end

  create_table "subscribtions", charset: "utf8", force: :cascade do |t|
    t.integer "user_id"
    t.date "start_date"
    t.date "end_date"
    t.string "package_type"
    t.string "note"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "watch_num"
    t.index ["user_id"], name: "index_subscribtions_on_user_id"
  end

  create_table "trade_orders", charset: "utf8", force: :cascade do |t|
    t.string "capital_account"
    t.string "stock_code"
    t.string "sec_name"
    t.datetime "trade_date"
    t.string "order_type"
    t.integer "amount"
    t.decimal "price", precision: 14, scale: 2
    t.string "status", default: "下单"
    t.string "entrust_no"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_stock_list_rels", charset: "utf8", force: :cascade do |t|
    t.integer "user_id"
    t.integer "stock_list_id"
    t.string "status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_user_stock_list_rels_on_user_id"
  end

  create_table "users", charset: "utf8", force: :cascade do |t|
    t.string "nickname", limit: 100
    t.string "openid"
    t.string "password_digest"
    t.string "mobile"
    t.string "access_token"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.string "current_sign_in_ip", limit: 50
    t.datetime "last_sign_in_at"
    t.string "last_sign_in_ip", limit: 50
    t.integer "failed_attempts"
    t.datetime "locked_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "avatar"
    t.index ["access_token"], name: "index_users_on_access_token"
    t.index ["mobile"], name: "index_users_on_mobile"
    t.index ["openid"], name: "index_users_on_openid"
  end

  create_table "wechat_sessions", charset: "utf8", force: :cascade do |t|
    t.string "openid", null: false
    t.string "hash_store"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["openid"], name: "index_wechat_sessions_on_openid", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
end
