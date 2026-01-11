class UsersController < ApplicationController
  before_action :set_user, only: [:show]
  def show
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:success] = "Welcome to the Talk X!"
      redirect_to @user
    else
      render 'new', status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.expect(user: [:name, :email, :password, :password_confirmation])
  end

  def set_user
    @user = User.find(params[:id])
  end
end
