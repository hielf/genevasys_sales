class UserMailerJob < ApplicationJob
  queue_as :low_priority

  def perform(*args)
    @user_ref = args[0]

    user = User.find_by(ref: @user_ref)

    begin
      UserMailer.welcome(user).deliver_now
    rescue Exception => ex
      Rails.logger.warn "User Mailer Job error #{ex.message}"
    end
  end
# UserMailerJob.perform_later @user_ref
end
