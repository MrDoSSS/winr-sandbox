# frozen_string_literal: true

module WinrForm
  module FormHelper
    def winr_form_for(record, *args, &block)
      options = args.extract_options!
      output = tag(:'winr-form', {}, true)
      output << form_for(record, *(args << options.merge(builder: WinrForm::Builder)), &block)
      output.safe_concat('</winr-form>')
    end
  end
end
