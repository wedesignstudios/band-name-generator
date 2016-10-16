class WordsController < ApplicationController
  before_action :set_word, only: [:edit, :update, :show]

  def index
    @words = Word.all
  end

  def new
    @word = Word.new
  end

  private

  def set_word
    @word = Word.find(params[:id])
  end

end
