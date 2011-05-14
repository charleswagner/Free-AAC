class CreateImages < ActiveRecord::Migration
  def self.up
    create_table :images do |t|
      t.string :picture_file_name
      t.integer :picture_file_size
      t.string :picture_file_type
      t.integer :votes, :default => 0
      t.integer :word_id
      t.timestamps
    end
    add_index :images, :word_id
  end

  def self.down
    drop_table :images
  end
end
