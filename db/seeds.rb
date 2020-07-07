
require Rails.root.join("data", "urls.rb")

#USERS (7)
  User.create(email: "alex@gmail.com", first_name: "alex", last_name: "smith", password: 'password', password_confirmation: 'password')
  User.create(email: "bob@gmail.com", first_name: "bob",last_name: "jimmy", password: 'password', password_confirmation: 'password')
  User.create(email: "chris@gmail.com", first_name: "chris",last_name: "lawsh", password: 'password', password_confirmation: 'password')
  User.create(email: "sam@gmail.com", first_name: "sam",last_name: "carslon", password: 'password', password_confirmation: 'password')
  User.create(email: "bill@gmail.com", first_name: "bill",last_name: "smith", password: 'password', password_confirmation: 'password')
  User.create(email: "matt@gmail.com", first_name: "matt",last_name: "miller", password: 'password', password_confirmation: 'password')
  User.create(email: "juan@gmail.com", first_name: "juan",last_name: "collins", password: 'password', password_confirmation: 'password')

#COLLECTIONS (7)
  7.times do
    Collection.create(user_id: (rand(6)+1), title: Faker::Movies::HarryPotter.location)
  end

#CATEGORIES (7)
  Category.create(title: "Animals") #1
  Category.create(title: "Art") #2
  Category.create(title: "Other") #3
  Category.create(title: "Nature") #4
  Category.create(title: "Places") #5
  Category.create(title: "People") #6
  Category.create(title: "Technology") #7

#PICTURES (27)
  IMAGE_URLS.map { |url| 
    Picture.create(
      category_id: (rand(6)+1), 
      user_id: (rand(6)+1), 
      title: Faker::Movies::StarWars.planet, 
      url: url,
      description: Faker::Lorem.sentence(word_count: 3, supplemental: true),
      views: rand(700)
    )
  }

#COLLECTION-PICTURE JUNCTIONS (50)
  50.times do
    CollectionPicture.create(collection_id: (rand(6)+1), picture_id: (rand(26)+1))
  end 

#PICTURE COMMENTS (50)
  50.times do    
    PictureComment.create(user_id: (rand(6)+1), picture_id: (rand(26)+1), body: Faker::TvShows::DumbAndDumber.quote)
  end

puts "Data Seeded.."
puts "Emails: alex@gmail.com, bob@gmail.com, chris@gmail.com, sam@gmail.com, bill@gmail.com, matt@gmail.com, juan@gmail.com password: 'password' "