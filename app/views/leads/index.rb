# frozen_string_literal: true

class Views::Leads::Index < Views::Base
  include Phlex::Rails::Helpers::LinkTo

  # @type [Phlex::HTML] 
  register_element :wa_button

  def page_title = "Leads"

  def initialize(leads:)
    @leads = leads
  end

  def view_template
    Card(class: "w-full mx-auto p-8") do
      CardHeader { Heading(level: 1) { "Leads" } }
      Table do
        TableCaption { "All leads for this month" }
        TableHeader do
          TableRow do
            TableHead { "Full Name" }
            TableHead { "Email Address" }
            TableHead { "Created At" }
            TableHead(class: "text-right") { "Role" }
          end
        end
        TableBody do
          @leads.each do |lead|
            TableRow do
              TableCell(class: 'font-medium') { a(href: lead_path(lead)) { lead.full_name } }
              TableCell(class: 'font-medium') { a(href: lead_path(lead)) { lead.email_address } }
              TableCell(class: 'font-medium') { a(href: lead_path(lead)) { lead.created_at.strftime("%B %d, %Y %H:%M") } }
            end
          end
        end
        TableFooter do
          Pagination do
            PaginationContent do
              PaginationItem(href: "#") do
                # chevrons_left_icon
                plain "First"
              end
              PaginationItem(href: "#") do
                # chevron_left_icon
                plain "Prev"
              end

              PaginationEllipsis

              PaginationItem(href: "#") { "4" }
              PaginationItem(href: "#", active: true) { "5" }
              PaginationItem(href: "#") { "6" }

              PaginationEllipsis

              PaginationItem(href: "#") do
                plain "Next"
                # chevron_right_icon
              end
              PaginationItem(href: "#") do
                plain "Last"
                # chevrons_right_icon
              end
            end
          end
        end
      end
    end
  end # view_template

  private

  # @return [String]
  def chevrons_left_icon
    # @sg-ignore
    svg(
      xmlns: "http://www.w3.org/2000/svg",
      viewbox: "0 0 320 512",
      class: @classes
    ) do |s|
      s.path(d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z")
    end
  end

end