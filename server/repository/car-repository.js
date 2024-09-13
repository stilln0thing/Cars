
const { Op } = require('sequelize')
const { Car } = require('../models/index');

class CarRepository{
    async createCar(data){
        console.log(data);
        try {
            const car = await Car.create(data);
            return car;
        } catch (error) {
            console.log("Something went wrong in the repo layer")
            throw {error};
        }
    }

    async getCar(carId){
        try {
            const car = await Car.findByPk(carId);
            return car;
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw {error};
        }
    }

    async getAllCar(){
        try {
            const cars = await Car.findAll();
            return cars;
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw {error};
        }
    }

    async deleteCar(carId){
        try {
            await Car.destroy({
                where: {
                    id: carId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw {error};
        }
    }
}

module.exports = CarRepository;