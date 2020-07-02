# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require Rails.root.join("data", "urls.rb")


7.times do
  User.create(email: Faker::Internet.email, password: 'password', password_confirmation: 'password')
  # User.create(email: "sarah@gmail.com", password: 'password', password_confirmation: 'password')
  # User.create(email: "lee@gmail.com", password: 'password', password_confirmation: 'password')
  # User.create(email: "pat@gmail.com", password: 'password', password_confirmation: 'password')
  # User.create(email: "sally@gmail.com", password: 'password', password_confirmation: 'password')
  # User.create(email: "bill@gmail.com", password: 'password', password_confirmation: 'password')
end
7.times do
  Collection.create(user_id: (rand(6)+1), title: Faker::Movies::HarryPotter.location)
end


Category.create(title: "Animals") #1
Category.create(title: "Art") #2
Category.create(title: "Other") #3
Category.create(title: "Nature") #4
Category.create(title: "Places") #5
Category.create(title: "People") #6
Category.create(title: "Technology") #7


IMAGE_URLS.map { |url| 

  Picture.create(
    category_id: (rand(6)+1), user_id: (rand(6)+1), title: Faker::Movies::StarWars.planet, 
    url: url
  )

}



50.times do
  CollectionPicture.create(collection_id: (rand(6)+1), picture_id: (rand(26)+1))
end 


  50.times do
    
    PictureComment.create(user_id: (rand(6)+1), picture_id: (rand(26)+1), body: Faker::TvShows::DumbAndDumber.quote)
    # puts Faker::TvShows::DumbAndDumber.quote
  end
  
  puts 'data seeded!'