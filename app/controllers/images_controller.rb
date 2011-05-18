class ImagesController < ApplicationController
  # GET /images
  # GET /images.xml
  
  before_filter :get_word
  
  def upvote
    if current_user
      @image = Image.find(params[:id])
      if @image.user_already_upvoted(current_user)
        flash[:notice] = "You already upvoted this image"
      else
        @image.destroy_down_vote(current_user)
        @vote = Vote.create(:user => current_user, :up => true, :image => @image)
        @image.update_attribute(:vote_count, @image.vote_count += 1)
      end
    else
      flash[:notice] = "You must be signed in to vote"
    end
    redirect_to :back
  end
  
  def downvote
     if current_user
        @image = Image.find(params[:id])
        if @image.user_already_downvoted(current_user)
          flash[:notice] = "You already upvoted this image"
        else
          @image.destroy_up_vote(current_user)
          @vote = Vote.create(:user => current_user, :down => true, :image => @image)
          @image.update_attribute(:vote_count, @image.vote_count -= 1)
        end
      else
        flash[:notice] = "You must be signed in to vote"
      end
      redirect_to :back
  end
  
  def get_word
    if params[:word_id]
      @word = Word.find(params[:word_id])
    end
  end

  def index
    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @images }
    end
  end

  # GET /images/1
  # GET /images/1.xml
  def show
    @image = Image.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @image }
    end
  end

  # GET /images/new
  # GET /images/new.xml
  def new
    @image = Image.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @image }
    end
  end

  # GET /images/1/edit
  def edit
    @image = Image.find(params[:id])
  end

  # POST /images
  # POST /images.xml
  def create
    @image = Image.new(params[:image])

    respond_to do |format|
      if @image.save
        format.html { redirect_to(word_images_path(@image.word), :notice => 'Image was successfully created.') }
        format.xml  { render :xml => @image, :status => :created, :location => @image }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @image.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /images/1
  # PUT /images/1.xml
  def update
    @image = Image.find(params[:id])

    respond_to do |format|
      if @image.update_attributes(params[:image])
        format.html { redirect_to(word_images_path(@image.word), :notice => 'Image was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @image.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /images/1
  # DELETE /images/1.xml
  def destroy
    @image = Image.find(params[:id])
    @image.destroy

    respond_to do |format|
      format.html { redirect_to(images_url) }
      format.xml  { head :ok }
    end
  end
end
