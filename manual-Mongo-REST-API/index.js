const express = require('express');
const routerAPI = require('./api-routes');
const parser = require('body-parser');
const mongoose = require('mongoose');

//create an express variable app
var app = express();

//variable for ports to be usable if integrated with cloud service based on available ports (opposed to hard code port)
var port = process.env.PORT || 8080;

//GET request connected to localhost at specified port
app.get('/', function(req, res){
    res.send('Good to go! (GET request works)');
});

//function confirming that express app is running on correct port
app.listen(port, function() {
    console.log('Server running on port: ' + port);
});

//Endpoint that connects to the api-router
app.use('/api', routerAPI);

//body parser used to manage and handle the post requests
app.use(parser.urlencoded({
    extended: true
}));
app.use(parser.json());


mongoose.connect('mongodb://localhost:8080/loginAPI', {
    useNewUrlParser: true
});
var db = mongoose.connection;

