const router = require("express").Router();

const vehicleRouter = require("./vehicles.js");
const sessionRouter = require("./session.js");
const userRouter = require("./users.js");
const tripRouter = require("./trips.js");

router.use('/session', sessionRouter);
router.use('/vehicle', vehicleRouter);
router.use('/user', userRouter);
router.use('/trip', tripRouter);

module.exports = router;