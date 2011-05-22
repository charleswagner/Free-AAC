class UploadController < ApplicationController
  def index
    # render :file => 'app/view/upload/index.rhtml'
  end
  def uploadFile
    puts "Params upload :" + params[:upload].to_s
    post = DataFile.save(params[:upload])
    render :action =>'index'
  end
end
