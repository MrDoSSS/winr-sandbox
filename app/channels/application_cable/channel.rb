# frozen_string_literal: true

module ApplicationCable
  class Channel < ActionCable::Channel::Base
    def stream_name
      ids = connection.identifiers.map { |identifier| send(identifier).try(:id) || send(identifier) }
      [
        params[:channel],
        ids.select(&:present?).join(';')
      ].select(&:present?).join(':')
    end
  end
end
