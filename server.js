require('dotenv').config()
const express = require('express');
const app = express();//app is an object
const methodOverride = require('method-override');//include the method-override package
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

const verifyToken = (req, res, next) => {
    let token = req.cookies.jwt; // COOKIE PARSER GIVES YOU A .cookies PROP, WE NAMED OUR TOKEN jwt
  
    console.log("Cookies: ", req.cookies.jwt);
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
      if (err || !decodedUser) {
        return res.status(401).json({ error: "Unauthorized Request" });
      }
      req.user = decodedUser; // ADDS A .user PROP TO REQ FOR TOKEN USER
      console.log(decodedUser);
  
      next();
    });
  };

app.use(express.static("public"));

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }))

app.use("/recipes", require("./controllers/recipesController.js"));
// ADD THE VERIFY TOKEN MIDDLEWARE WHERE WE WANT AUTHENTICATION
app.use("/users", verifyToken, require("./controllers/usersController.js"));
app.use("/auth", require("./controllers/authController.js"));

//Index
app.get('/', (req, res) => {
    res.render('users/index.ejs')
  })

app.listen(process.env.PORT, () => {
    console.log('I am listening');
})
    