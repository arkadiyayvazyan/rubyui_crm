module Components
  class Navbar < Base
    def view_template
      header(class: "supports-backdrop-blur:bg-background/80 sticky top-0 z-50 border-b bg-background/80 backdrop-blur-2xl backdrop-saturate-200") do
        div(class: "px-2 sm:px-4 sm:container flex h-14 items-center") do
          Link(href: leads_path, variant: :ghost) { "Home" }
          Link(href: new_lead_path, variant: :ghost) { "Form" }
        end
      end

    end
  end
end