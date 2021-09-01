const express = require('express')
const asyncHandler = require('express-async-handler');

const { Trip, Vehicle } = require("../../db/models");

const router = express.Router();

router.get("/", asyncHandler( async(req, res, next) => {
    const trips = Trip.findAll();

    return res.json({ trips });
}));

router.get('/:userId', asyncHandler(async (req, res, next) => {
    const { userId } = req.params;
    const trips = await Trip.findAll({ where: {userId: userId}, include: {model: Vehicle}});

    return res.json(trips);
}));

router.post("/", asyncHandler(async (req, res, next) => {
    const { startDate, endDate, earnings, reinbursements, milesDriven, vehicleId, userId, receiptUrl } = req.body;
    const trip = await Trip.build({ startDate, endDate, earnings, reinbursements, milesDriven, vehicleId, userId, receiptUrl });
    await trip.save();

    return res.json(trip);
}));

router.delete("/:tripId", asyncHandler(async (req, res, next) => {
    const { tripId } = req.params;
    const vehicle = await Trip.findByPk(tripId);
    await vehicle.destroy();

    return res.json(tripId);
}));

module.exports = router;