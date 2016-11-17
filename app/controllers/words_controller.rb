class WordsController < ApplicationController
  before_action :set_word, only: [:edit, :update, :show]

  def index
    words = Word.all
    render json: words    
  end

  def new
    @word = Word.new
  end

  def create    
    @word = Word.new(words_params)
    @word.string = @word.string.titleize   

    if @word.save
      redirect_to new_word_path, flash: {success: "Word successfully added."}
    else
      redirect_to new_word_path, flash: {error: "Unable to add word. " + @word.errors.full_messages.to_sentence + "."}
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
