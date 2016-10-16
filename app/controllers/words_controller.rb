class WordsController < ApplicationController  

  def index
    @words = Word.all
  end

  def new
    @word = Word.new
  end  

end