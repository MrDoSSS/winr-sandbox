# frozen_string_literal: true

class ValidationChannel < ApplicationCable::Channel
  include CableReady::Broadcaster

  def subscribed
    stream_from 'ValidationChannel'
  end

  def receive(data)
    result = []

    data  = ActionController::Parameters.new(data)
    value = data[:value]

    if value.present?
      id    = data[:id]
      field = data[:field]
      klass = data[:class_name].singularize.classify.constantize

      obj = klass.find_by_id(id) if id
      obj ||= klass.new
      obj.attributes = { field => value }

      result += obj.errors[field] || [] unless obj.valid?
    end

    cable_ready['ValidationChannel'].dispatch_event(
      name: 'validateResult',
      detail: result,
      selector: data[:target]
    )
    cable_ready.broadcast
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
