class Collection < ApplicationRecord
  belongs_to :user
  has_many: pictures, through: :collection_pictures
  validates :title, presence: true
  
end
