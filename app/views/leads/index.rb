# frozen_string_literal: true

class Views::Leads::Index < Views::Base

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
        # TableFooter do
        #   TableRow do
        #     TableHead(class: "font-medium", colspan: 3) { "Total" }
        #     TableHead(class: "font-medium text-right") { format_amount(invoices.sum(&:amount)) }
        #   end
        # end
      end
    end
  end #view_template

end