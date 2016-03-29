class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.boolean :realtor, default: false
      t.string :realtor_company

      t.timestamps
    end
  end
end
