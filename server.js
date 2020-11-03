require('dotenv').config()
const express = require('express');
const app = express();//app is an object
const methodOverride = require('method-override');//include the method-override package

app.use(express.static("public"));

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }))

app.use("/recipes", require("./controllers/recipesController.js"));
app.use("/users", require("./controllers/usersController.js"));
app.use("/auth", require("./controllers/authController.js"));

//Index
app.get('/', (req, res) => {
    res.render('users/index.ejs')
  })

app.listen(process.env.PORT, () => {
    console.log('I am listening');
})
    