const express = require('express');
const router = express.Router();
const sequelize = require('../config/connection');
const {User} = require("../../models")

module.exports = router