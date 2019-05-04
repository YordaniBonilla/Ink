const express = require("express");
const bodyParser = require("body-parser");
const compression = require('compression');
const route = require('../server/routes.js')
const db = require('../database/mysql.js')
const app = express();
const nodemailer = require('nodemailer')
const path = require('path')
const email = require('../server/email.js')

//middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + "/../client/dist"));

//HTTP Requests go here

// react-router fallback so we can reload without visiting root

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/../client/dist/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

app.get("/home", route.getStyles)

app.get("/home-images", route.imagesByStyle)

app.post("/book", route.getApp)

<<<<<<< HEAD
app.post('/api/form',email.sendMail)
=======
app.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Comments</h3>
    <p>${req.body.message}</p>
    <h3>Tattoo location</h3>
    <p>${req.body.bodyPart}</p>
    <h3>Date of Appointment</h3>
    <p>${req.body.date}</p>
      `
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port:587,
      auth: {
        user: '	monica.hudson89@ethereal.email',//change this email
        pass: 'KmCmxq41pwa78k9KgY'//change password
      }
    })
    
    let mailOptions = {
      from: 'test@testaccount.com',
      to: '	monica.hudson89@ethereal.email',//use same email
      replyTo: 'test@testaccount.com',
      subject: 'New Message',
      text: req.body.message,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }
      console.log('Mssage sent: %s', info.message)
      console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
    })
  })
})
>>>>>>> d22b7c28b5f8436001d5401cc6c8418fbe1d2eef

module.exports = app;