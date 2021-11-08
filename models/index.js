const User = require("./User")
const Image = require("./Image")

User.hasMany(Image, {
    onDelete: "CASCADE"
})

Image.belongsTo(User)

module.exports={
    User,
    Image
}