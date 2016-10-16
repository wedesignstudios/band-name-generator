class WordsController < ApplicationController
  before_action :set_word, only: [:edit, :update, :show]

  def index
    @words = Word.all
  end

  def new
    @word = Word.new
  end

  def create    
    word = Word.create(words_params)
    redirect_to new_word_path, success: "Word successfully added."
  end

  private

  def set_word
    @word = Word.find(params[:id])
  end

  def words_params
    params.require(:word).permit(:string, :article)
  end

end
