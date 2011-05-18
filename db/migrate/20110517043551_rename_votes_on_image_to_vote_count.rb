class RenameVotesOnImageToVoteCount < ActiveRecord::Migration
  def self.up
    rename_column :images, :votes, :vote_count
  end

  def self.down
  end
end
