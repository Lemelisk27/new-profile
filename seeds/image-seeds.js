const {Image} = require("../models")

const imageData = [
    {
        UserId: 1,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1636331906/me_rx9pyi.jpg"
    }
]

const seedImages = () => Image.bulkCreate(imageData)

module.exports = seedImages