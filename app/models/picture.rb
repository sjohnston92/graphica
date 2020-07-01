class Picture < ApplicationRecord
  belongs_to :user
  belongs_to :category

  has many :picture_comments, through :users, dependent: :destroy
  has many :collections, through :collection_pictures

  validates :url, presence: true
  validates :title, presence: true


end
