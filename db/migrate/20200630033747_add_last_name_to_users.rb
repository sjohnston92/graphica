class AddLastNameToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :last_name, :string
    add_column :users, :tagline, :text
    add_column :users, :banner_image, :text
  end
end
