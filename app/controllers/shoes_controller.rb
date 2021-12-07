class ShoesController < ApplicationController
    def index 
        shoes = Shoe.all 
        render json: shoes
    end 

    def show
        shoe = Shoe.find_by(id: params[:id])
        render json: shoe
    end 

    def create 
        # byebug
        database_shoe = Database.find_by(name: params[:database_id])
        new_shoe = {
            user_id: params[:user_id],
            database_id: database_shoe.id,
            shoe_name: params[:shoe_name], 
                    
        }
        a_shoe = Shoe.create(new_shoe)
        render json: a_shoe
    end 

    def update
        shoe = Shoe.find_by(id: params[:id])
        shoe.update(shoe_params)
        render json: shoe
    end 

    def destroy
        shoe = Shoe.find_by(id: params[:id])
        shoe.logs.destroy_all
        shoe.destroy
        render json: shoe
    end 

    private 

    def shoe_params 
        params.permit(:shoe_name, :user_id, :database_id)
    end 

end

