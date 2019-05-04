module.exports.sendMail = (req, res) => {
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
      <p>${req.body.location}</p>
        `
      let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port:587,
        auth: {
          user: 'chasity.erdman@ethereal.email',
          pass: 'WzbXbWr8Yg1xuFckup'
        }
      })
      
      let mailOptions = {
        from: 'test@testaccount.com',
        to: 'chasity.erdman@ethereal.email',
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
  }