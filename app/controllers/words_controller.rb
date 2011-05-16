class WordsController < ApplicationController
  # GET /words
  # GET /words.xml
  
  before_filter :get_words
  
  def get_words
    @words = Word.where('published=?', true).order('created_at DESC').limit(4)
  end
  
  def search
    @word = Word.find(:first, :conditions => ['english=?', params[:word]])
    if !params[:word].blank? && !@word
      @word = Word.new
      @word.english = params[:word]
    end
    render :action => 'new'
  end
  
  
  def index
    @words = Word.where('published=?', true)

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @words }
    end
  end

  # GET /words/1
  # GET /words/1.xml
  def show
    @word = Word.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @word }
    end
  end

  # GET /words/new
  # GET /words/new.xml
  def new
    @word = Word.new    
    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @word }
    end
  end

  # GET /words/1/edit
  def edit
    @word = Word.find(params[:id])
  end

  # POST /words
  # POST /words.xml
  def create
    @word = Word.new(params[:word])
  
      respond_to do |format|
        if @word.save
          format.html { redirect_to(word_images_path(@word), :notice => 'Word was successfully created.') }
          format.xml  { render :xml => @word, :status => :created, :location => @word }
        else
          format.html { render :action => "new" }
          format.xml  { render :xml => @word.errors, :status => :unprocessable_entity }
        end
      end
  end

  # PUT /words/1
  # PUT /words/1.xml
  def update
    @word = Word.find(params[:id])

    respond_to do |format|
      if @word.update_attributes(params[:word])
        format.html { redirect_to(word_images_path(@word), :notice => 'Word was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @word.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /words/1
  # DELETE /words/1.xml
  def destroy
    @word = Word.find(params[:id])
    @word.destroy

    respond_to do |format|
      format.html { redirect_to(words_url) }
      format.xml  { head :ok }
    end
  end
end
