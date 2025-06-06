# frozen_string_literal: true

class Views::Leads::Show < Views::Base

  def page_title = "Lead #{@lead.id}"

  def initialize(lead:)
    @lead = lead
  end

  def view_template
    Card(class: "w-full max-w-md p-8 mr-5") do
      CardHeader { Heading(level: 1) { "Info" } }
      CardContent do
        Heading(level: 3) { "Full name:" }
        span(class: "block font-medium mb-1") { @lead.full_name }
        br
        Heading(level: 3) { "Email address:" }
        span(class: "block font-medium mb-1") { @lead.email_address }
      end
      CardFooter(class: "flex justify-end") do
        Link(variant: :outline, href: edit_lead_path(@lead)) { "Update" }
      end
    end
    Card(class: "w-full max-w-lg p-8") do
      CardHeader { Heading(level: 1) { "Messages" } }
    end
  end #view_template

end