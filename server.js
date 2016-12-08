//express server

//get modules
var express = require('express');
mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
bcrypt = require('bcrypt-nodejs');

var nodemailer = require('nodemailer');
transporter = nodemailer.createTransport('smtps://theoutcast92%40yahoo.com:01091992Abc!@smtp.mail.yahoo.com');

//create express app
var app = express();

//load client
app.use(express.static(path.join(__dirname,'./client')));

//allow for app to user bodyparser
app.use(bodyParser.json());

app.use(session({
    secret: 'testing',
    resave: false,
    saveUninitialized: true
}));

//require mongoose and routes file
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

//listen on port 8000
app.listen(6789, function(){

});
