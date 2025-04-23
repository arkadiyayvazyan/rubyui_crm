# frozen_string_literal: true

class Views::Leads::Form < Views::Base
  include Phlex::Rails::Helpers::FormWith

  def initialize(lead:)
    @lead = lead
  end

  def view_template
    form_with model: @lead do
      FormField do
        FormFieldLabel(for: "full_name") { "Full name" }
        Input(type: "text", placeholder: "Full name", id: "lead[full_name]", name: "lead[full_name]", required: true)
        FormFieldError()
      end
      FormField do
        FormFieldLabel(for: "email_address") { "Email address" }
        Input(type: "email", placeholder: "Email address", id: "lead[email_address]", name: "lead[email_address]", required: true)
        FormFieldError()
      end
      FormField do
        FormFieldLabel(for: "message") { "Message" }
        Textarea(id: "message", placeholder: "Message", required: true, id: "lead[message]", name: "lead[message]")
        FormFieldError()
      end
      div(class: "flex justify-end mt-4") do
        Button(type: "submit") { "Send it!" }
      end
    end # form_with
  end #view_template

end