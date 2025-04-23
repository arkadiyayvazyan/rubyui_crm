class Lead < ApplicationRecord
  def self.create!(lead_params)
    lead = super(lead_params)
    Message.create!(lead: lead, author: lead, body: lead_params[:message])
  end
end
