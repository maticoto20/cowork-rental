class Owner::BookingsController < ApplicationController
  before_action :set_booking, only: [:edit, :update]
  def index
    @bookings = policy_scope([:owner, Booking]).owned_bookings(current_user)
  end

  def edit
  end

  private

  def set_booking
    @booking = Booking.find(params[:id])
    authorize @booking
  end
end
