class CreateCollectionPictures < ActiveRecord::Migration[6.0]
  def change
    create_table :collection_pictures do |t|
      t.belongs_to :collection, null: false, foreign_key: true
      t.belongs_to :picture, null: false, foreign_key: true

      t.timestamps
    end
  end
end
