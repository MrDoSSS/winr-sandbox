# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]
  respond_to :html, :js

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # def create
  #   super
  # end

  # DELETE /resource/sign_out
  def destroy
    super do
      return respond_to { |f| f.js }
    end
  end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
