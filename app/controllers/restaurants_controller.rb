class RestaurantsController < ApplicationController

  def index
    @restaurants = Restaurant.all
    @restaurant = Restaurant.new
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end

  def edit
    @restaurant = Restaurant.find(params[:id])
  end

  def update
    @restaurant = Restaurant.find(params[:id])

    if @restaurant.update(restaurant_params)
      #redirect_to @restaurant
      # instead of a redirect, this can be handled in update.js.erb
    else
      # really if this action is due to a request that expects a js response,
      # shouldn't render here either
      render 'edit'
    end

  end

  def new
    @restaurant = Restaurant.new
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)

    if @restaurant.save
      flash.now[:notice] = "#{@restaurant.name} has been added to the list"
      #redirect_to root_url
      # instead of a redirect, this can be handled in create.js.erb
    else
      # really if this action is due to a request that expects a js response,
      # shouldn't render here either
      render 'new'
    end
  end

  def destroy
    @restaurant = Restaurant.find(params[:id])
    @restaurant.destroy
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :website, :low_price, :high_price)
  end
end
