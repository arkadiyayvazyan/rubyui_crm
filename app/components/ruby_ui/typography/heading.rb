# frozen_string_literal: true

module RubyUI
  # The Heading component renders HTML heading elements (h1-h6) with configurable styling
  # based on level, size, and custom attributes.
  class Heading < Base
    # Initializes a new Heading component.
    #
    # @param level [Integer, nil] The heading level (1-6) which determines the HTML tag (h1-h6) if @as is not specified
    # @param as [String, nil] Explicitly sets the HTML tag to use, overriding the level parameter
    # @param size [String, Integer, nil] The size of the heading (1-9), overriding the default size for the level
    # @param attrs [Hash] Additional HTML attributes to apply to the heading
    # @return [RubyUI::Heading] A new instance of Heading
    def initialize(level: nil, as: nil, size: nil, **attrs)
      @level = level
      @as = as
      @size = size
      super(**attrs)
    end

    # Renders the heading component with the appropriate HTML tag and attributes.
    #
    # @yield The content to be rendered inside the heading
    # @return [String] The rendered HTML heading
    def view_template(&)
      tag = determine_tag
      public_send(tag, **attrs, &)
    end

    private

    # Determines which HTML tag to use for the heading.
    #
    # @return [String] The HTML tag name to use (e.g., "h1", "h2", etc.)
    # @note Priority: 1) @as parameter if provided, 2) h{@level} if level is provided, 3) defaults to "h1"
    def determine_tag
      return @as if @as
      return "h#{@level}" if @level
      "h1"
    end

    # Provides the default HTML attributes for the heading.
    #
    # @return [Hash] A hash of default attributes to apply to the heading
    def default_attrs
      {
        class: class_names
      }
    end

    # Generates the CSS class names for the heading based on base classes and size.
    #
    # @return [String] A space-separated string of CSS class names
    def class_names
      base_classes = "scroll-m-20 font-bold tracking-tight"
      size_class = size_to_class[(@size || level_to_size[@level&.to_s] || "6").to_s]
      "#{base_classes} #{size_class}"
    end

    # Maps size numbers to corresponding CSS classes for text sizing.
    #
    # @return [Hash] A mapping of size numbers (1-9) to CSS class names
    def size_to_class
      {
        "1" => "text-xs",
        "2" => "text-sm",
        "3" => "text-base",
        "4" => "text-lg",
        "5" => "text-xl",
        "6" => "text-2xl",
        "7" => "text-3xl lg:text-4xl",
        "8" => "text-4xl",
        "9" => "text-5xl"
      }
    end

    # Maps heading levels to default size numbers.
    #
    # @return [Hash] A mapping of heading levels (1-4) to size numbers
    def level_to_size
      {
        "1" => "7",
        "2" => "6",
        "3" => "5",
        "4" => "4"
      }
    end
  end
end
