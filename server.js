const express = require('express');
const app = express();//app is an object
const methodOverride = require('method-override');//include the method-override package

app.use(express.static("public"));

app.use(methodOverride('_method'));

app.use("/recipes", require("./controllers/recipesController.js"));
app.use("/users", require("./controllers/usersController.js"));

app.listen(3000, ()=>{
    console.log("I am listening");
});
    