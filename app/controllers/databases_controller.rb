class DatabasesController < ApplicationController
    def index 
        databases = Database.all 
        render json: databases
    end 

    def show
        database = Database.find_by(id: params[:id])
        render json: database
    end 

    def create 
        database = Database.create(database_params)
        render json: database
    end 

    def update
        database = Database.find_by(id: params[:id])
        database.update(database_params)
        render json: database 
    end 

    def destroy
        database = Database.find_by(id: params[:id])
        database.destroy
        render json: database
    end 

    private 

    def database_params 
        params.require(:database).permit(:image, :name, :description)
    end 

end
