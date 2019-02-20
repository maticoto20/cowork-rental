class Office < ApplicationRecord
  belongs_to :user
  has_many :bookings
  has_many :reviews, through: :bookings
  has_many :users, through: :bookings
  validates :user, :name, :address, :price, :workspace_type, presence: true
  validates :number_of_seats, :price, numericality: { greater_than_or_equal_to: 0 }
  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?
  mount_uploader :photo, PhotoUploader
  
  #check if the reviews correspond to the office
  def reviews
    reviews = []
    self.bookings.each do |booking|

      reviews << booking.review if booking.review
    end
    return reviews
  end

  def rating
    reviews.map { |review| review.rating }.sum / reviews.count.to_f
  end
end
