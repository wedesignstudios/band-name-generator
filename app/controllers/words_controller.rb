class WordsController < ApplicationController
  before_action :set_word, only: [:edit, :update, :show]

  def index
    @words = Word.all

    respond_to do |format|
      format.html
      format.json {render json: @words}
    end 
  end

  def new
    @word = Word.new
  end

  def create    
    @word = Word.new(words_params)

    if @word.save
      redirect_to new_word_path, success: "Word successfully added."
    else
      render "new", error: "Unable to add word."
    end
  end

  private

  def set_word
    @word = Word.find(params[:id])
  end

  def words_params
    params.require(:word).permit(:string, :article)
  end

end
