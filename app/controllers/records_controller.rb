class RecordsController < ApplicationController
  def index
    find_more_photos
    @record = Record.all.sample
    respond_to do |format|
      format.html { render :index }
      format.json { render json: {earthPic: Record.all.sample} }
    end
  end

  def destroy
  	Record.find_by(id: params[:id]).destroy

    @record = Record.all.sample
  	redirect_to records_path
	end

  private

  def find_more_photos
    PhotoFinder.new.call
  end
end
