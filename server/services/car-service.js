const  CarRepository  = require('../repository/car-repository');


class CarService {
    constructor() {
        this.carRepository = new CarRepository();
    }

    async createCar(data){
        try {
            const car = await this.carRepository.createCar(data);
            return car;
        } catch (error) {
            console.log("Something went wrong in the service layer");
           
        }
    }

    async deleteCar(carId){
        try {
            const response = this.carRepository.deleteCar(carId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
        }
    }

    async getCar(carId){
        try {
            const car = await this.carRepository.getCar(carId);
            return car;
        } catch (error) {
            console.log("Something went wrong in the service layer");
        }
    }

    async getAllCar(){
        try {
            const cars = await this.carRepository.getAllCar();
            return cars;
        } catch (error) {
            console.log("Somehting went wrong in the service layer");
        }
    }
}

module.exports = CarService;