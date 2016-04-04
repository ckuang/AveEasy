class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.text :address, null: false
      t.integer :beds, null: false
      t.integer :baths, null: false
      t.integer :price, null: false
      t.string :category, null: false
      t.integer :user_id, null: false
      t.float :lat, null: false
      t.float :lng, null: false
			t.string :neighborhood, null: false

      t.timestamps
    end

  add_index :listings, :user_id
  end
end
