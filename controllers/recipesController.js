const express = require("express");
const router = express.Router();

const recipes = require("../models/recipes.js");

router.get("/", (req, res) => {
  res.render("index.ejs", {
    recipes: recipes,
  });
});

//put this above your show.ejs file
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

router.post("/", (req, res) => {
  recipes.push(req.body);
  res.redirect("/recipes");
});

router.get("/:index", (req, res) => {
  res.render("show.ejs", { recipe: recipes[req.params.index] });
});

router.get("/:index/edit", function (req, res) {
  res.render(
    "edit.ejs", //render views/edit.ejs
    {
      //pass in an object that contains
      recipe: recipes[req.params.index], //the recipe object
      index: req.params.index, //... and its index in the array
    }
  );
});

router.put("/:index", (req, res) => {
  recipes[req.params.index] = req.body; //in our recipes array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)
  res.redirect("/recipes"); //redirect to the index page
});

router.delete("/:index", (req, res) => {
  recipes.splice(req.params.index, 1); //remove the item from the array
  res.redirect("/recipes"); //redirect back to index route
});

module.exports = router;