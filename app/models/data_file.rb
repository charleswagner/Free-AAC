class DataFile < ActiveRecord::Base
  def self.save(upload)
    puts upload['datafile'] 
    name =  upload['datafile']
    directory = "public/data"
    # create the file path
    path = File.join(directory, name)
    # write the file
    File.open(path, "wb") { |f| f.write(upload['datafile'].content) }
  end
    
end
