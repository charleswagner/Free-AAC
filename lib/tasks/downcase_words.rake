task :downcase_words => :environment do 
  Word.all.each do |w|
    w.update_attribute(:english, w.english.downcase)
  end
end