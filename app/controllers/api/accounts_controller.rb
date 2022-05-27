# encoding: utf-8
class Api::AccountsController < Api::ApplicationController
  # include ApplicationHelper
  skip_before_action :authenticate_user!, only: [:sign_in, :miniprogram_sign_in, :simple_sign_in]

  def sign_in
    m_requires! [:mobile, :verify_code]
    @user = User.find_or_create_by(mobile: params[:mobile])
    @user.update(openid: params[:openid]) if !params[:openid].blank?

    status, message = @user.login(params[:verify_code], request.ip)
    if status
      cookies[:token] = { :value => @user.access_token, :expires => Time.now + 180.days}
      cookies[:mobile] = { :value => @user.mobile, :expires => Time.now + 180.days}
      # cookies[:openid] = { :value => @user.openid, :expires => Time.now + 180.days}
      @user
    else
      render_json([401, message])
    end
  end

  def sign_out
    if current_user.update(access_token: nil)
      result =[0, '登出成功']
    else
      result =[1, '登出失败']
    end
    render_json(result)
  end

end
