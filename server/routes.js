var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var db = require('../database/mysql.js');
// var items = require('../database-mongo');
var app = express();
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
//Query dB for StylesDropdown
exports.getStyles = (req, res) => {
  db.getStyles()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err)})
}


exports.imagesByStyle = (req, res) => {
  db.imagesByStyle()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err)})
}

exports.getUser = (req, res) => {
  db.getUser()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err)})
}


exports.getApp = (req, res) => {
  db.getApp()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err)})
}




