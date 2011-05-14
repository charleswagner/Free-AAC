class CreatePhraseWords < ActiveRecord::Migration
  def self.up
    create_table :phrase_words do |t|
      t.integer :phrase_id
      t.integer :word_id

      t.timestamps
    end
    add_index :phrase_words, :phrase_id
    add_index :phrase_words, :word_id
  end

  def self.down
    drop_table :phrase_words
  end
end
