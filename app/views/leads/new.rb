# frozen_string_literal: true

class Views::Leads::New < Views::Base
  include Phlex::Rails::Helpers::FormWith

  def initialize(lead:)
    @lead = lead
  end

  def view_template
    Dialog(class: "mx-auto") do

      DialogTrigger do
        Button { "Fill out a form!" }
      end

      DialogContent(size: :lg) do

        div(id: "lead_form") do
          DialogHeader do
            Heading(level: 1) { "Let's talk!" }
            DialogDescription { "Fill out this form and we'll get back to you shortly." }
          end

          DialogMiddle do
            render Views::Leads::Form.new(lead: @lead)
          end
        end

      end # DialogContent
    end # Dialog
  end #view_template

end