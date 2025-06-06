# frozen_string_literal: true

class Views::Leads::New < Views::Base
  include Phlex::Rails::Helpers::FormWith

  def page_title = "New Lead"

  def initialize(lead:)
    @lead = lead
  end

  def view_template
    Dialog(class: "mx-auto") do

      DialogTrigger do
        Button(class: btn_tw_classes, data: { controller: "animate", action: "mouseover->animate#scale mouseout->animate#unscale" }) { "New Lead" }
      end

      DialogContent(size: :lg) do

        div(id: "lead_form") do
          DialogHeader do
            Heading(level: 1) { "Let's talk!" }
            DialogDescription { "Fill out this form and we'll get back to you shortly." }
          end

          DialogMiddle do
            Components::Leads::Form(lead: @lead)
          end
        end

      end # DialogContent
    end # Dialog
  end #view_template

  def btn_tw_classes
    "bg-gradient-to-r from-blue-500 to-blue-500 hover:from-blue-500 hover:to-purple-600 p-4 text-white transition-colors duration-500 ease-in-out"
  end

end
