const express = require('express');
const app = express();//app is an object

const users = require('./models/users.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package


app.get('/users/', (req, res) => {
    res.send(users);
});

app.get('/users/:index', (req, res) => {
    res.render('show.ejs', { //second param must be an object
        user: users[req.params.index] //there will be a variable available inside the ejs file called user, its value is users[req.params.index]
    });
});

app.listen(3000, ()=>{
    console.log("I am listening");
});
    