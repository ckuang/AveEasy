class CreateSavedListings < ActiveRecord::Migration
  def change
    create_table :saved_listings do |t|
      t.integer :user_id,     null: false
      t.integer :listing_id,  null: false

      t.timestamps
    end

    add_index :saved_listings, :user_id
    add_index :saved_listings, :listing_id
  end
end
