const seedUsers = require("./user-seeds")
const seedImages = require("./image-seeds")

const sequelize = require("../config/connection")

const seedAll = async () => {
    await sequelize.sync({force: true})
    console.log('\n-----DATABASE SYNCED-----\n')
    await seedUsers()
    console.log('\n-----USERS SYNCED-----\n')
    await seedImages()
    console.log('\n-----IMAGES SYNCED-----\n')
    process.exit(0)
}

seedAll()