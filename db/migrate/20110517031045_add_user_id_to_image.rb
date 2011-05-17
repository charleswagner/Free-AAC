class AddUserIdToImage < ActiveRecord::Migration
  def self.up
    add_column :images, :user_id, :integer
    add_index :images, :user_id
  end

  def self.down
  end
end
