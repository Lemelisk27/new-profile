const User = require("./User")
const Image = require("./Image")

User.hasMany(Image)

Image.belongsTo(User)

module.exports={
    User,
    Image
}