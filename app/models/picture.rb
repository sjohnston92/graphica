class Picture < ApplicationRecord
  belongs_to :user
  belongs_to :category

  has_many :picture_comments
  # has_many :picture_comments, through: :users, dependent: :destroy
  has_many :collections, through: :collection_pictures

  validates :url, presence: true
  validates :title, presence: true

  def self.search(search, page)
    Picture.where('title ILIKE :q', q: "%#{search}%")
    .page(page).per(18)
  end
end
