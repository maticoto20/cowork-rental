class BookingsController < ApplicationController
  before_action :set_office, only: [:new, :create]
  before_action :set_booking, only: [:edit, :update]
  def new
    @booking = Booking.new
    authorize @booking
  end

  def create
    @booking = Booking.new
    @booking.start_date = booking_params["start_date"].split(" to ").first
    @booking.end_date = booking_params["start_date"].split(" to ").last
    authorize @booking
    @booking.office = @office
    @booking.user = current_user
    return redirect_to bookings_path if @booking.save

    render :new
  end

  def index
    @bookings = policy_scope(Booking).order(created_at: :desc)
  end

  def edit
  end

  def update
    @booking.start_date = booking_params["start_date"].split(" to ").first
    @booking.end_date = booking_params["start_date"].split(" to ").last
    @booking.save


    return redirect_to bookings_path if @booking.save && current_user != @booking.user
    return redirect_to owner_bookings_path if @booking.save

    render :edit
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date)
  end

  def set_booking
    @booking = Booking.find(params[:id])
    authorize @booking
  end

  def set_office
    @office = Office.find(params[:office_id])
  end
end
