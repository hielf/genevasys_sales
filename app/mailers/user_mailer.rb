class UserMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.welcome.subject
  #
  # def welcome
  #   @greeting = "Hi"
  #
  #   mail to: "hielf@qq.com"
  # end

  # default :from => 'no-reply@genevasys.com'

  def welcome(*args)
    if !args[0].nil? && args[0].class == "User"
      @user = user
    else
      @user = User.first
    end

    mail(
      :to => @user.email,
      :subject => 'Welcome to Geneva System!'
    )
  end
end
