class BandNameController < ApplicationController

  def index
    band_names = BandName.all
    render json: band_names
  end

  def show
    band_name = BandName.find(params[:id])
    render json: band_name
  end

  def create
    band_name = BandName.create(band_name_params)    
  end

  private

  def band_name_params
    params.require(:band_name).permit(:name, :genre_id)
  end

end
