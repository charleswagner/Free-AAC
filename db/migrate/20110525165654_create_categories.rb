class CreateCategories < ActiveRecord::Migration
  def self.up
    create_table :categories do |t|
      t.string :name
      t.string :picture_file_name
      t.string :picture_file_type
      t.integer :picture_file_size

      t.timestamps
    end
  end

  def self.down
    drop_table :categories
  end
end
