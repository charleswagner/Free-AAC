class RebuildDb < ActiveRecord::Migration
  def self.up
    create_table "images", :force => true do |t|
      t.string   "picture_file_name"
      t.integer  "picture_file_size"
      t.string   "picture_file_type"
      t.integer  "vote_count",        :default => 0
      t.integer  "word_id"
      t.datetime "created_at"
      t.datetime "updated_at"
      t.integer  "user_id"
    end

    add_index "images", ["user_id"], :name => "index_images_on_user_id"
    add_index "images", ["word_id"], :name => "index_images_on_word_id"

    create_table "phrases", :force => true do |t|
      t.string   "word_ids"
      t.datetime "created_at"
      t.datetime "updated_at"
    end
  end

  def self.down
  end
end
