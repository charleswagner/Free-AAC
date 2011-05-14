class PublishedOnWord < ActiveRecord::Migration
  def self.up
    add_column :words, :published, :boolean, :default => false
    Word.all.each do |w|
      if !w.images.blank?
        w.update_attribute(:published, true)
      else
        w.update_attribute(:published, false)
      end
    end
  end

  def self.down
  end
end
