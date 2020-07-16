require Rails.root.join("data", "urls.rb")

  User.create(email: "alex@gmail.com", 
    banner_image: IMAGE_URLS.sample,
    image: "https://images.unsplash.com/photo-1588948138600-bc75fd417834?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    first_name: "alex", last_name: "smith", password: 'password', password_confirmation: 'password')
  User.create(email: "bob@gmail.com", 
    banner_image: IMAGE_URLS.sample,
    image: "https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
    first_name: "bob",last_name: "jimmy", password: 'password', password_confirmation: 'password')
  User.create(email: "chris@gmail.com",
    banner_image: IMAGE_URLS.sample,
    image: "https://images.unsplash.com/photo-1593839686924-4b344fac3f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    first_name: "chris",last_name: "lawsh", password: 'password', password_confirmation: 'password')
  User.create(email: "sam@gmail.com", 
    banner_image: IMAGE_URLS.sample,
    image: "https://images.unsplash.com/photo-1593771009063-e2a5fc81be47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=646&q=80",
    first_name: "sam",last_name: "carslon", password: 'password', password_confirmation: 'password')
  User.create(email: "bill@gmail.com", 
    banner_image: IMAGE_URLS.sample,
    image: "https://images.unsplash.com/photo-1593591182784-05bba029a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=652&q=80",
    first_name: "bill",last_name: "smith", password: 'password', password_confirmation: 'password')
  User.create(email: "matt@gmail.com", 
    banner_image: IMAGE_URLS.sample,
    image: "https://images.unsplash.com/photo-1593793602373-ca02114d4a3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    first_name: "matt",last_name: "miller", password: 'password', password_confirmation: 'password')
  User.create(email: "juan@gmail.com", 
    banner_image: IMAGE_URLS.sample,
    image: "https://images.unsplash.com/photo-1525129075020-d43c7ba72ecf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    first_name: "juan",last_name: "collins", password: 'password', password_confirmation: 'password')

    
#CATEGORIES (7)
  Category.create(title: "Animals") #1
  Category.create(title: "Art") #2
  Category.create(title: "Other") #3
  Category.create(title: "Nature") #4
  Category.create(title: "Places") #5
  Category.create(title: "People") #6
  Category.create(title: "Technology") #7
    

#PICTURES (27)
users = User.all
categories = Category.all
IMAGE_URLS.map { |url| 
Picture.create(
  category_id: categories.sample.id, 
  user_id: users.sample.id, 
  title: Faker::Movies::StarWars.planet, 
  url: url,
  description: Faker::Lorem.sentence(word_count: 3, supplemental: true),
  views: rand(700)
  )
}

#The following gives each user a collection and puts all his/her pictures into that collection
# It would be nice to put only some of the pictures into one or more collections.
user_picture = []
picture = Picture.all
picture.each do |p|
  user_picture << {user: p.user_id, picture: p.id}
end

x = 1
while x < 7 
  @collection = Collection.create(user_id: x, title: Faker::Movies::HarryPotter.location)
  user = user_picture.select{|key, value| key[:user] == x }
  user.map{ |u|
    CollectionPicture.create(collection_id: @collection.id, picture_id: u[:picture] )  
  }
  x += 1 
end

#PICTURE COMMENTS (50)
  50.times do    
    PictureComment.create(user_id: (rand(6)+1), picture_id: (rand(26)+1), body: Faker::TvShows::DumbAndDumber.quote)
  end

puts "Data Seeded.."
puts "Emails: alex@gmail.com, bob@gmail.com, chris@gmail.com, sam@gmail.com, bill@gmail.com, matt@gmail.com, juan@gmail.com password: 'password' "