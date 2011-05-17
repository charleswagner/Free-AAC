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
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20110517031530) do

  create_table "images", :force => true do |t|
    t.string   "picture_file_name"
    t.integer  "picture_file_size"
    t.string   "picture_file_type"
    t.integer  "votes",             :default => 0
    t.integer  "word_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
  end

  add_index "images", ["user_id"], :name => "index_images_on_user_id"
  add_index "images", ["word_id"], :name => "index_images_on_word_id"

  create_table "phrase_words", :force => true do |t|
    t.integer  "phrase_id"
    t.integer  "word_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "phrase_words", ["phrase_id"], :name => "index_phrase_words_on_phrase_id"
  add_index "phrase_words", ["word_id"], :name => "index_phrase_words_on_word_id"

  create_table "phrases", :force => true do |t|
    t.string   "word_ids"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", :force => true do |t|
    t.string   "email",                               :default => "",          :null => false
    t.string   "encrypted_password",   :limit => 128, :default => "",          :null => false
    t.string   "password_salt",                       :default => "",          :null => false
    t.string   "reset_password_token"
    t.string   "remember_token"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                       :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name",                                :default => "Anonymous"
    t.string   "picture_file_name"
    t.string   "picture_file_type"
    t.integer  "picture_file_size"
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

# Could not dump table "words" because of following StandardError
#   Unknown type 'boolena' for column 'published'

end
