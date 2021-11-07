const express = require('express');
const sequelize = require("./config/connection")
const exphbs = require('express-handlebars')

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({});

const {User} = require("./models")

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log(`App listening on http://localhost:${PORT}`);
    });
});