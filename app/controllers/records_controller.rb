class RecordsController < ApplicationController
  def index
    find_more_photos
    @record = Record.all.first
    respond_to do |format|
      format.html { render :index }
      format.json { render json: {earthPic: Record.all.sample} }
    end
  end

  private

  def find_more_photos
    PhotoFinder.new.call
  end
end
