var http = require('http');
var express = require('express');
var path = require('path');
var geohash = require('geohash').GeoHash;




var app = express();
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function(){
  console.log("Server listening on localhost:3000");
});

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.get('/apple', function(req, res){
  res.render('apple.ejs');
});

app.get('/google', function(req, res){
  res.render('google.ejs');
});

app.get('/facebook', function(req, res){
  res.render('facebook.ejs');
});

app.get('/about', function(req, res){
  res.render('about.ejs');
});