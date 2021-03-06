const express = require("express");
const router = express.Router();

const Recipe = require("../models").Recipe;
const User = require('../models').User;

//index
router.get("/", (req, res) => {
  Recipe.findAll({order: [['name', 'ASC']]}).then((recipes) => {  // keep same syntax to order by // 
    res.render("index.ejs", {
      recipes: recipes,
    });
  });
});

//new recipe
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

//create a recipe post route
router.post("/", (req, res) => {
  Recipe.create(req.body).then((newRecipe) => {
    res.redirect("/recipes");
  });
});

//show.ejs file
router.get("/:id", (req, res) => {
  Recipe.findByPk(req.params.id, {
    include : [User]
  }).then((recipe) => {
    res.render("show.ejs", {
      recipe: recipe,
    });
  });
});

//edit route
router.get("/:id/edit", function (req, res) {
  Recipe.findByPk(req.params.id).then((recipe) => {
    res.render("edit.ejs", {
      recipe: recipe,
    });
  });
});

//update route
router.put("/:id", (req, res) => {
  Recipe.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((recipe) => {
    res.redirect("/recipes");
  });
});

//delete route
router.delete("/:id", (req, res) => {
  Recipe.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/recipes");
  });
});

module.exports = router;