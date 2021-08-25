const express = require('express')
const asyncHandler = require('express-async-handler');

const { Vehicle, User } = require("../../db/models");

const router = express.Router();

router.get('/', asyncHandler(async (req, res, next) => {
    const vehicles = await Vehicle.findAll({include: {model: User}});
    
    return res.json({
        vehicles
    })
}));

router.get('/:userId', asyncHandler(async (req, res, next) => {
    const { userId } = req.params
    const vehicles = await Vehicle.findAll({where: {userId: userId}});
    return res.json(vehicles);
}))

router.post("/", asyncHandler(async (req, res, next) => {
    const { year, make, model, startingMileage, picturesUrl, userId} = req.body;
    const vehicle = await Vehicle.build({year, make, model, startingMileage, picturesUrl, userId});
    await vehicle.save();
    return res.json(vehicle);
}))

router.delete('/', asyncHandler(async (req, res, next) => {
    const vehicle = await Vehicle.findByPk(req.body.vehicleId);

    await vehicle.delete()
    return res.json({
        vehicle
    })
}))

module.exports = router;