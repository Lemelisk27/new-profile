const express = require('express');
const router = express.Router();
const sequelize = require('../../config/connection');
const {User,Image} = require("../../models")

router.get("/",(req,res)=>{
    const api = true
    const apipage = ""
    if(!req.session.user){
        res.redirect("/api/login")
        return
    }
    res.render("apipage",{
        api:api,
        apipage:apipage
    })
})

router.get("/login",(req,res)=>{
    const api = true
    const apipage = "/login"
    res.render("login",{
        api:api,
        apipage:apipage
    })
})

router.get("/profile",(req,res)=>{
    if(!req.session.user){
        res.redirect("/api/login")
        return
    }
    const api = true
    const apipage = "/profile"
    User.findOne({
        where: {
            id:req.session.user.id
        }
    }).then(userData=>{
        const hbsUser = userData.get({plain:true})
        res.render("profile",{
            user:hbsUser,
            api:api,
            apipage:apipage
        })
    })
})

router.get("/viewimages",(req,res)=>{
    if(!req.session.user){
        res.redirect("/api/login")
        return
    }
    const api = true
    const apipage = "/viewimages"
    Image.findAll({
        where: {
            UserId:req.session.user.id
        }
    }).then(imgData=>{
        const hbsImg = imgData.map(img=>img.get({plain:true}))
        res.render("viewimages",{
            img:hbsImg,
            api:api,
            apipage:apipage
        })
    })
})

router.get("/viewimages/:id",(req,res)=>{
    if(!req.session.user){
        res.redirect("/api/login")
        return
    }
    const api = true
    const apipage = "/viewimages"
    Image.findOne({
        where: {
            id:req.params.id
        }
    }).then(imgData=>{
        const hbsImg = imgData.get({plain:true})
        res.render("viewimagesbyid",{
            img:hbsImg,
            api:api,
            apipage:apipage
        })
    })
})

router.get("/updateprofile",(req,res)=>{
    if(!req.session.user){
        res.redirect("/api/login")
        return
    }
    const api = true
    const apipage = "/updateprofile"
    User.findOne({
        where: {
            id:req.session.user.id
        }
    }).then(userData=>{
        const hbsUser = userData.get({plain:true})
        res.render("updateprofile",{
            user:hbsUser,
            api:api,
            apipage:apipage
        })
    })
})

router.get("/password",(req,res)=>{
    if(!req.session.user){
        res.redirect("/api/login")
        return
    }
    const api = true
    const apipage = "/password"
    res.render("password",{
        api:api,
        apipage:apipage
    })
})

module.exports = router