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

  def welcome(user)
    @user = user
    mail(
      :to => @user.email,
      :subject => 'Welcome to Geneva System!'
    )
  end
end
