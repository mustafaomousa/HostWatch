const express = require('express')
const asyncHandler = require('express-async-handler');

const { Vehicle, User, Trip, sequelize } = require("../../db/models");

const router = express.Router();

router.get('/', asyncHandler(async (req, res, next) => {
    const vehicles = await Vehicle.findAll({include: {model: User}});
    
    return res.json({ vehicles });

}));

router.get('/:userId', asyncHandler(async (req, res, next) => {
    const { userId } = req.params;
    const vehicles = await Vehicle.findAll({where: {userId: userId}});
    return res.json(vehicles);
}));

router.get('/earnings/:vehicleId', asyncHandler(async (req, res, next) => {
    const { vehicleId } = req.params;
    const vehicleTrips = await Trip.findAll({where: {vehicleId: vehicleId}, attributes: ['vehicleId', 'earnings', 'reinbursements']});

    return res.json(vehicleTrips)
}))

router.post("/", asyncHandler(async (req, res, next) => {
    const { year, make, model, startingMileage, picturesUrl, userId} = req.body;
    const vehicle = await Vehicle.build({year, make, model, startingMileage, picturesUrl, userId});
    await vehicle.save();
    return res.json(vehicle);
}))

router.delete("/:vehicleId", asyncHandler(async (req, res, next) => {
    const { vehicleId } = req.params;
    const vehicle = await Vehicle.findByPk(vehicleId);
    await vehicle.destroy();
    return res.json(vehicleId);
}));

module.exports = router;