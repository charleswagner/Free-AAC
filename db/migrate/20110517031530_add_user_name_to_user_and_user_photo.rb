class AddUserNameToUserAndUserPhoto < ActiveRecord::Migration
  def self.up
    add_column :users, :name, :string, :default => 'Anonymous'
    add_column :users, :picture_file_name, :string
    add_column :users, :picture_file_type, :string
    add_column :users, :picture_file_size, :intger
  end

  def self.down
  end
end
