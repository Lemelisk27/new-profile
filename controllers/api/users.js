const express = require('express');
const router = express.Router();
const sequelize = require('../../config/connection');
const {User} = require("../../models")

router.get("/",(req,res)=>{
    User.findAll()
    .then(userData=>{
        const hbsUser = userData.map(user=>user.get({plain:true}))
        res.json(hbsUser)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({messgae:"An Error Occured",err:err})
    })
})

module.exports = router