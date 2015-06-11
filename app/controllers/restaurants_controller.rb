class RestaurantsController < ApplicationController

  def index
  	@restaurants = Restaurant.all
  end

  def show
  	@restaurant = Restaurant.find(params[:id])
  end

  # # def bus_hours
  # 	@bus_hours = Restaurant.find(params[:id]).map[5]
  # end
  			# Not sure how to accomplish what I need.
  			# Want to turn "hours" column in db into an array of
  			#    hashes.  {"Monday" => {"Open" => "11:00am", 
  			#    "Closed" => "10:00pm"}}, "Tuesday" => ...etc...
  			# Then pull out all the keys and place those strings into 
  			#    the 1st column (days), then pull out the value of
  			#    the 1st subset hash into 2nd column (open) & pull out
  			#    the value of the 2nd subset hash into 3rd column (closed)
  			#   (not sure if i explained that clearly...)
  def edit
  end

  def new
  end
end
