var express = require('express');
var session = require('express-session');
var cookie = require('cookie-parser');
var path = require('path');
var ejs = require('ejs');
var multer = require('multer'); //To save images in database
var async = require('async');
var nodemailer = require('nodemailer'); //To send email messages once the user sign up
var bcrypt =require('bcrypt');
var espressValidator = require('express-validator');
var sweetalert = require('sweetalert2'); //To send customined alert msgs
var bodyParser = require('body-parser');
const http = require('http');

var db = require('./models/db_controller');

var  login = require ('./controllers/login');
var  home = require ('./controllers/home');
var  signup = require ('./controllers/signup');
var add_doc = require('./controllers/add_doctor');
var  doc_controller = require ('./controllers/doc_controller');
var db = require ('./models/db_controller');
var reset = require('./controllers/reset_controller');
var set = require('./controllers/set_controller');
var employee = require ('./controllers/employee.js');
var logout = require ('./controllers/logout');
var verify = require ('./controllers/verify');
var store = require ('./controllers/store');
// var landing = require ('./controllers/landing');
var complain = require ('./controllers/complain');
var inbox = require ('./controllers/inbox');
var appointment = require ('./controllers/appointment');
var receipt = require ('./controllers/receipt');
// var chat = require ('./controllers/chat');



var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use (bodyParser.json());
app.use(cookie());
//app.use(expressValidator());

 app.listen(3000 , function(){

  console.log('server started on point 3000');
});



app.get("/index", function(req, res){
  res.render("index");

});
app.get("/about", function(req, res){
  res.render("about");

});
app.get("/services", function(req, res){
  res.render("services");

});
app.get("/contact", function(req, res){
  res.render("contact");

});



app.use('/login' ,login);
app.use('/home' , home);
app.use('/signup' , signup);
app.use('/doctors', doc_controller);
app.use('/resetpassword' ,reset);
app.use('/setpassword',set);
app.use('/employee',employee);
app.use ('/logout',logout);
app.use ('/verify', verify);
app.use ('/store',store);
// app.use ('/',landing);
app.use ('/complain',complain);
app.use ('/inbox',inbox);
app.use ('/appointment',appointment);
app.use('/receipt',receipt);
// app.use('/doctors/add_doctor',add_doc);
