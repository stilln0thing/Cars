const CarService = require('../services/car-service')

const carService = new CarService();

const create = async (req,res) => {
    try {
        const car = await carService.createCar(req.body);
        return res.status(201).json({
            data: car,
            success: true,
            message: 'Successfully created a car',
            err: []
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: [],
            success: false,
            message: 'Not able to create a car',
            err: error
        })
    }
}

const destroy = async (req,res) => {
    try {
        const response = await carService.deleteCar(req.params.id);
        return res.status(200).json({
            data: response, 
            success: true,
            message: 'Successfully deleted a car',
            err: []
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: [],
            success: false,
            message: 'Not able to delete a car',
            err: error
        })
    }
}

const get = async (req,res) => {
    try {
        const car = await carService.getCar(req.params.id);
        return res.status(200).json({
            data: car,
            success: true,
            message: 'Successfully fetched a car',
            err: []
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: [],
            success: false,
            message: 'Not able to get the car',
            err: error
        })
    }
}

const getAll = async(req,res) => {
    try {
        const cars = await carService.getAllCar();
        return res.status(200).json({
            data: cars,
            success: true,
            message: 'Successfully fetched all the cars',
            err: []
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: [],
            success: false,
            message: 'Not able to get all cars',
            err: error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    getAll
}