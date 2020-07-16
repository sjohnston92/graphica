class Collection < ApplicationRecord
  belongs_to :user
  has_many :pictures, through: :collection_pictures
  has_many :collection_pictures
  validates :title, presence: true
  
  def self.search(search, page)
    Collection.where('title ILIKE :q', q: "%#{search}%")
    .page(page).per(18)
  end
end
