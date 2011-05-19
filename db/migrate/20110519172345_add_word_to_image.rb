class AddWordToImage < ActiveRecord::Migration
  def self.up
    add_column :images, :word, :string
  end

  def self.down
  end
end
