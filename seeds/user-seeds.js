const {User} = require("../models")

const userData = [
    {
        first_name: "Zach",
        last_name: "Smith",
        username: "Lemelisk27",
        email: "Lemelisk27@gmail.com"
    }
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers