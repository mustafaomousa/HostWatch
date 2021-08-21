const router = require("express").Router();

const vehicleRouter = require("./vehicles.js");

router.use('/vehicle', vehicleRouter);

module.exports = router;