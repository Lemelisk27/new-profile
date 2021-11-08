const router = require('express').Router();
const frontEndApi = require("./frontEndApi")
const userRoutes = require("./users")
const imageRoutes = require("./images")

router.use(frontEndApi)
router.use("/users",userRoutes)
router.use("/images",imageRoutes)

module.exports = router