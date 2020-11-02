const express = require('express');
const app = express();//app is an object
const methodOverride = require('method-override');//include the method-override package

app.use(methodOverride('_method'));

const users = require('./models/users.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package

// users homepage
app.get('/users', (req, res) => {
    res.render('index.ejs', {
        users: users
    });
})

// indv users show page
app.get('/users/:index', (req, res) => {
    res.render('show.ejs', { //second param must be an object
        user: users[req.params.index] //there will be a variable available inside the ejs file called user, its value is users[req.params.index]
    });
});

// edit route
app.get('/users/:index/edit', function(req, res){
	res.render(
		'edit.ejs', //render views/edit.ejs
		{ //pass in an object that contains
			user: users[req.params.index], //the user object
			index: req.params.index //... and its index in the array
		}
	);
});

// edit put 
app.put('/users/:index', (req, res) => { //:index is the index of our users array that we want to change
    
	users[req.params.index] = req.body; //in our users array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)
	res.redirect('/users'); //redirect to the index page
});

// delete user 
app.delete('/users/:index', (req, res) => {
	users.splice(req.params.index, 1); //remove the item from the array
	res.redirect('/users');  //redirect back to index route
});

app.listen(3000, ()=>{
    console.log("I am listening");
});
    