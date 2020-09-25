# frozen_string_literal: true

module WinrForm
  class Builder < ActionView::Helpers::FormBuilder
    def email_field(method, options = {}, &block)
      options[:type] = 'email'
      text_field(method, options, &block)
    end

    def password_field(method, options = {}, &block)
      options[:type] = 'password'
      text_field(method, options, &block)
    end

    def text_field(method, options = {}, &block)
      options[:native] ||= {}

      options[:label] ||= @object.class.human_attribute_name(method)
      options[:value] ||= @object.send(method).presence
      options[:id]    ||= @template.dom_id(@object, method)

      if @object.errors[method].present?
        options[:errors] ||= @object.errors[method].to_json
      end

      unless options[:'no-validate']
        options[:validators] ||= [{
          name: 'ActiveRecord',
          class_name: @object.class.name,
          field: method,
          id: @object.id
        }].to_json
      end

      options[:native][:name] ||= "#{@object_name}[#{method}]"

      options.except(:label, :value, :errors,
                     :'no-validate', :validators, :native).each do |k, v|
        options[:native][k] = v
      end

      options[:native] = options[:native].to_json

      @template.content_tag 'winr-input', nil, options, &block
    end
  end
end
