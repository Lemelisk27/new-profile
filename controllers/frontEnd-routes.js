const express = require('express');
const router = express.Router();
const sequelize = require('../config/connection');
const {User,Image} = require("../models")

router.get("/",(req,res)=>{
    res.render("homepage")
})

module.exports = router