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

router.delete('/', asyncHandler(async (req, res, next) => {
    const vehicle = await Vehicle.findByPk(req.body.vehicleId);

    await vehicle.delete()
    return res.json({
        vehicle
    })
}))

module.exports = router;