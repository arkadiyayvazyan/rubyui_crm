class ApplicationController < ActionController::Base
  layout false

  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  def turbo_replace(id, component)
    respond_to do |format|
      format.turbo_stream do
        render turbo_stream: turbo_stream.replace(id, component)
      end
    end
  end

end
