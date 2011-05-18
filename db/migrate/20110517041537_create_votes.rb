class CreateVotes < ActiveRecord::Migration
  def self.up
    create_table :votes do |t|
      t.integer :user_id
      t.integer :image_id
      t.boolean :up
      t.boolean :down

      t.timestamps
    end
    
    add_index :votes, :user_id
    add_index :votes, :image_id
  end

  def self.down
    drop_table :votes
  end
end
