# frozen_string_literal: true
require "phlex"
require "phlex/rails"

module Phlex
  module Rails
  end
end

module Views
end

module Components
  extend Phlex::Kit
end

Rails.autoloaders.main.push_dir(
  Rails.root.join("app/views"), namespace: Views
)

Rails.autoloaders.main.push_dir(
  Rails.root.join("app/components"), namespace: Components
)
