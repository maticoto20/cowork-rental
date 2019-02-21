class OfficesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]
  before_action :set_office, only: [:show, :edit, :update]
  def new
    @office = Office.new
    authorize @office
  end

  def create
    @office = Office.new(office_params)
    authorize @office
    @office.user = current_user
    return redirect_to office_path(@office) if @office.save

    render :new
  end

  def index
    if params[:search]
      @offices = policy_scope(Office).search_by_name_and_worspace_type(params[:search])
    else
      @offices = policy_scope(Office).order(created_at: :desc)
    end

    @markers = @offices.map do |office|
      {
        lng: office.longitude,
        lat: office.latitude,
        infoWindow: render_to_string(partial: "infowindow", locals: { office: office })
      }
    end
  end

  def show
  end

  def edit
  end

  def update
    authorize @office
    @office.update(office_params)
    return redirect_to office_path(@office) if @office.save

    render :edit
  end

  private

  def office_params
    params.require(:office).permit(:name, :price, :workspace_type, :number_of_seats, :address, :photo, :coffee, :wifi, :lockers, :kitchen)
  end

  def set_office
    @office = Office.find(params[:id])
    authorize @office
  end
end
