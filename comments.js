// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Use body-parser to parse POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Path: /comments
// Read comments.json file and send it as response
app.get('/comments', function(req, res) {
  fs.readFile('comments.json', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

// Path: /comments
// Write POST request data to comments.json file
app.post('/comments', function(req, res) {
  fs.readFile('comments.json', function(err, data) {
    var comments = JSON.parse(data);
    var newComment = {
      id: Date.now(),