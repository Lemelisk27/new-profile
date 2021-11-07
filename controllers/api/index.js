const router = require('express').Router();
const apiFrountEndRoutes = require("./apiFrontEnd")
const userRoutes = require("./users")

router.use("/",apiFrountEndRoutes)
router.use("/users",userRoutes)

module.exports = router