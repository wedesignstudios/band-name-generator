class HomeController < ApplicationController

  def index    
    @band_name = Word.build_band_name(2)
  end

end
