class Category < ApplicationRecord
  has_many :pictures
  validates :title, presence: true

end
