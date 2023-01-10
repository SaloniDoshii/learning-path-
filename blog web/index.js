const express = require('express');
const session = require("express-session")
const path = require('path');
const bodyParser = require('body-parser');
const public = path.join(__dirname, '/public')
const app = express();
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const { application } = require('express');
const exp = require('constants');
app.use(express.json());

//connection of models form static admin
// const User = require('./api/models/User')

//connextion of routes 
const blogroutes = require('./api/routes/Blogs');
const categoryroutes = require('./api/routes/Category');
//route for static admin;
const adminroutes = require('./api/routes/User');

//Database connection
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://salonid:91VwfCs9vAOsnhtn@cluster0.8fqg85l.mongodb.net/website", () => {
    console.log('database connected');
})

//folder which allows to access external css
app.use(express.static(public));
app.use(express.static("uploads"));

// parse requests to body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//setup view engine
app.set('view engine', 'ejs');

//session message 
app.use(session({
    secret: 'my secret key',
    saveUninitialized: true,
    resave: false
}))

app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});

//create category page
app.get('/createcat', (req, res) => {
    res.render('Createcat');
})


//routes
app.use('/', blogroutes);
app.use('/', categoryroutes);
app.use('/', adminroutes);

// server has started
app.listen(5000)