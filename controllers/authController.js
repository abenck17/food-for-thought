require('dotenv').config()
const express = require("express");
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../models").User;


// GET SIGNUP FORM
router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
  });
  
  // GET LOGIN
  router.get("/login", (req, res) => {
    res.render("users/login.ejs");
  });
  
  // POST LOGIN
  router.post("/login", (req, res) => {
    User.findOne({
      where: {
        username: req.body.username,
      },
    }).then((foundUser) => {
      if (foundUser) {
        bcrypt.compare(req.body.password, foundUser.password, (err, match) => {
          if (match) {
            const token = jwt.sign(
              {
                username: foundUser.username,
                id: foundUser.id,
              },
              process.env.JWT_SECRET,
              {
                expiresIn: "30 days",
              }
            );
            console.log(token);
        res.cookie("jwt", token); // SEND A NEW COOKIE TO THE BROWSER TO STORE TOKEN
            res.redirect(`/users/profile/${foundUser.id}`);
          } else {
            return res.sendStatus(400); // status(400) bad request
          }
        });
      }
    });
  });

  
  // POST - CREATE NEW USER FROM SIGNUP
  router.post("/", (req, res) => {
    bcrypt.genSalt(10, (err, salt) => { // generalt random salt variable 10 rounds
      if (err) return res.status(500).json(err); // error status(500)
  
      bcrypt.hash(req.body.password, salt, (err, hashedPwd) => { // current pass + salt go through hash
        if (err) return res.status(500).json(err);
        req.body.password = hashedPwd;
  
        User.create(req.body)
          .then((newUser) => {
            const token = jwt.sign(
              {
                username: newUser.username,
                id: newUser.id,
              },
              process.env.JWT_SECRET,
              {
                expiresIn: "30 days",
              }
            );
            console.log(token);
        res.cookie("jwt", token); // SEND A NEW COOKIE TO THE BROWSER TO STORE TOKEN
            res.redirect(`/users/profile/${newUser.id}`);
          })
          .catch((err) => {
            console.log(err);
            res.send(`err ${err}`);
          });
      });
    });
  });





module.exports = router;