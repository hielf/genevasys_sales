class User < ApplicationRecord
  include AccountConcern
  validates_lengths_from_database
  # has_secure_password
  has_many :orders, dependent: :destroy
  has_many :op_logs, dependent: :destroy

  before_save :generate_promote_code

  # validates :openid, uniqueness: true, on: :create
  # validates :password, presence: true, length: {minimum: 6, maximum: 32}, format: {with: /\A[\x21-\x7e]+\Z/i, message: '密码至少6位'}, on: :create
  # validates :generate_username_prefix, presence: true, on: :create

  def op(type, message)
    message = message.slice(0..255) if (message != "" && !message.nil?)
    begin
      log = op_logs.new(op_type: type, op_message: message, op_time: Time.now)
      log.save!
    rescue Exception => e
      Rails.logger.warn "op save failed: #{e}"
    end
  end

  def last_op
    log = op_logs.last
    return log.op_type, log.op_message
  end

  def add_lower_user
    if employee == "0"
      update(lower_users_count: lower_users_count + 1) if lower_users_count < 5
    end
  end

  def minus_lower_user
    if employee == "0"
      update(lower_users_count: lower_users_count - 1) if lower_users_count > 0
    end
  end

  # def had_subscribtion?(package)
  #   subscribtions.find_by(package_type: package.package_type)
  # end
  #
  # def current_subscribtion
  #   subscribtions.find_by("start_date <= ? AND end_date >= ?", Date.today, Date.today)
  # end
  #
  # def subscribing?(stock_list)
  #   user_stock_list_rels.find_by(stock_list_id: stock_list.id, status: "有效")
  # end
  #
  # def subscribe!(stock_list)
  #   s = user_stock_list_rels.find_or_initialize_by(stock_list_id: stock_list.id)
  #   s.save!
  # end
  #
  # def tryout!(stock_list)
  #   s = user_stock_list_rels.find_or_initialize_by(stock_list_id: stock_list.id, status: '试用')
  #   s.save!
  # end
  #
  # def unsubscribe!(stock_list)
  #   user_stock_list_rels.where(stock_list_id: stock_list.id).delete_all
  # end

  private
  def generate_promote_code
    p self.user_name
    # self.promote_code = ref.rjust(4, '0') if self.promote_code.nil?
    self.promote_code = self.user_name if self.promote_code.nil?
  end
end
