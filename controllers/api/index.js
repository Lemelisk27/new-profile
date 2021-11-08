const router = require('express').Router();
const frontEndApi = require("./frontEndApi-routes")
const userRoutes = require("./user-routes")
const imageRoutes = require("./image-routes")

router.use(frontEndApi)
router.use("/users",userRoutes)
router.use("/images",imageRoutes)

module.exports = router