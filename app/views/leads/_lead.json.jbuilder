json.extract! lead, :id, :full_name, :email_address, :created_at, :updated_at
json.url lead_url(lead, format: :json)
