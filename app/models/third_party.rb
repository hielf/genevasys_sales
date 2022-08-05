class ThirdParty < ApplicationRecord
  validates_lengths_from_database
  has_many :contacts

  before_save :generate_promote_code

  private
  def generate_promote_code
    self.promote_code = ref.rjust(6, '0') if self.promote_code.nil?
  end
end
