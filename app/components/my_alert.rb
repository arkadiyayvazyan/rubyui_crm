module Components
  class MyAlert < Base
    def initialize(message, description = nil)
      @message = message
    end
    
    def view_template
      Alert(variant: :success) do
        check_icon
        AlertTitle { @message }
        # if @description
        #   AlertDescription { description }
        # end
      end #alert
    end

    private

    # @return [Phlex::HTML]
    def check_icon
      # @sg-ignore
      svg(
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewbox: "0 0 24 24",
        stroke_width: "1.5",
        stroke: "currentColor",
        class: "w-4 h-4"
      ) do |s|
        s.path(
          stroke_linecap: "round",
          stroke_linejoin: "round",
          d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        )
      end
    end

  end
end
