# frozen_string_literal: true

module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :session_id
    identified_by :current_user

    def connect
      self.session_id = cookies.encrypted[:session_id]
      self.current_user = env['warden'].user
      reject_unauthorized_connection unless current_user || session_id
    end
  end
end
