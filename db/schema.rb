# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160402000947) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "images", force: :cascade do |t|
    t.integer "listing_id"
  end

  create_table "listings", force: :cascade do |t|
    t.text     "address",      null: false
    t.integer  "beds",         null: false
    t.integer  "baths",        null: false
    t.integer  "price",        null: false
    t.string   "category",     null: false
    t.integer  "user_id",      null: false
    t.float    "lat",          null: false
    t.float    "lng",          null: false
    t.string   "neighborhood", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "listings", ["user_id"], name: "index_listings_on_user_id", using: :btree

  create_table "pictures", force: :cascade do |t|
    t.integer  "imageable_id"
    t.string   "imageable_type"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "pictures", ["imageable_type", "imageable_id"], name: "index_pictures_on_imageable_type_and_imageable_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                        null: false
    t.string   "password_digest",                 null: false
    t.string   "session_token",                   null: false
    t.boolean  "realtor",         default: false
    t.string   "realtor_company"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
