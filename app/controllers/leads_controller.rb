class LeadsController < ApplicationController
  before_action :set_lead, only: %i[ show edit update destroy ]

  # GET /leads or /leads.json
  def index
    @leads = Lead.all
    render Views::Leads::Index.new(leads: @leads)
  end

  # GET /leads/1 or /leads/1.json
  def show
    render Views::Leads::Show.new(lead: @lead)
  end

  # GET /leads/new
  def new
    lead = Lead.new
    render Views::Leads::New.new(lead: lead)
    # render Components::MyAlert.new("Lead was successfully created.")
  end

  # GET /leads/1/edit
  def edit
  end

  # POST /leads or /leads.json
  def create
    Lead.create!(lead_params)
    turbo_replace "lead_form", Components::MyAlert.new("Thank you for contacting us! We'll get back to you shortly.")
  end

  # PATCH/PUT /leads/1 or /leads/1.json
  def update
    respond_to do |format|
      if @lead.update(lead_params)
        format.html { redirect_to @lead, notice: "Lead was successfully updated." }
        format.json { render :show, status: :ok, location: @lead }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @lead.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /leads/1 or /leads/1.json
  def destroy
    @lead.destroy!

    respond_to do |format|
      format.html { redirect_to leads_path, status: :see_other, notice: "Lead was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lead
      @lead = Lead.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def lead_params
      params.expect(lead: [ :full_name, :email_address ])
    end
end
