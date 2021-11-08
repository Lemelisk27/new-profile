const {User} = require("../models")

const userData = [
    {
        first_name: "Zach",
        last_name: "Smith",
        username: "Lemelisk27",
        email: "Lemelisk27@gmail.com",
        password: "password",
        profile_pic: "https://res.cloudinary.com/coder-mingle/image/upload/v1636331906/me_rx9pyi.jpg"
    }
]

const seedUsers = () => User.bulkCreate(userData,{individualHooks:true})

module.exports = seedUsers