class SessionsController < ApplicationController
  
  def new
  end

  def create
  	user = User.find_by(name: params[:user])
  	if user && user.password == params[:password]
  		session[:user] = params[:user]
  		redirect_to root_url, notice: "You're not in Kansas anymore"
  	else
  		flash.now[:error]	 = "Where the heck is Kansas?"
  		render :new
  	end
  end	

  def destroy
    session[:user] = nil
    redirect_to root_url, notice: 'Officially leaving Kansas'
  end

end   ##  END class







