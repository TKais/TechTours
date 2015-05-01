var http = require('http');
var express = require('express');
var path = require('path');
var geohash = require('geohash').GeoHash;
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:3000/TechTours'


MongoClient.connect(url, function(err, db){
  assert.equal(null, err);
  console.log("Connected to Mongo");
  db.close
});



var app = express();
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, '/public')));

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


