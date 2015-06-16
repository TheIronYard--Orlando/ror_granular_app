class RestaurantsController < ApplicationController
  	
  	def index
  		@restaurants = Restaurant.all
  	end

  	def show
  		@restaurant = Restaurant.find(params[:id])
  	end

  	def new
  		@restaurant = Restaurant.new
  	end

  	def create
  		Restaurant.create(params.require(:restaurant)
  			.permit(:name, :website, :created_at, :updated_at, 
  			:hours, :low_price, :high_price))
  		@restaurant = Restaurant.all
  		redirect_to root_url
  	end

  	def edit
   		@restaurant = Restaurant.find(params[:id])
 	end

  	def update
  		@restaurant = Restaurant.find(params[:id])
  		@restaurant.update(params.require(:restaurant)
  			.permit(:name, :website, :created_at,
  			:updated_at, :hours, :low_price,
  			:high_price))
  		redirect_to root_url
	end

	def destroy
		@restaurant = Restaurant.find(params[:id]).destroy!
  		@restaurant.Restaurant.new
  		redirect_to root_url
	end

end  # END class






