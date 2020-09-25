# frozen_string_literal: true

class SessionChannel < ApplicationCable::Channel

  def subscribed
    stream_from(stream_name)
  end

end
