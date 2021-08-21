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

module.exports = router;