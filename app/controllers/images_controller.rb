class ImagesController < ApplicationController
  
  def index
    @images = Image.all
  end
  
  def search
    if params[:word].blank?
      render :nothing => true
    else
      @images = Image.find(:all, :conditions => ['word like ?', "%#{params[:word]}%"])
      respond_to do |format|
        format.js
      end
    end
  end

  def new
    @images = []
    @image = Image.new

    respond_to do |format|
      format.html # new.html.erb
    end
  end

  def create
    @images = []
    @image = Image.new(params[:image])
    respond_to do |format|
      if @image.save
        format.html { redirect_to(images_path, :notice => 'Image was successfully created.') }
      else
        format.html { render :action => "new" }
      end
    end
  end

end
