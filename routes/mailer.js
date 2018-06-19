const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { Email, Password, Service } = require('../private/utils')

const nodemailer = require('nodemailer');

router.post('/mailer', (req, res) => {
    let {name, email, message} = _.pick(req.body, ['name', 'email', 'message'])
    
    res.redirect('/')

    const smtpTransport = nodemailer.createTransport({
        host: Service,
        port: 465,
        secure: true,
        auth: {
            user: Email,
            pass: Password
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: name,
        to: Email,
        subject: 'You have a new message from ' + name,
        text: message,
        replyTo: email
    }

    smtpTransport.sendMail(mailOptions, (err) => {
        if (err) {
            return (err)
        } else {
            res.send('Thank you! We have recieved your email.')
        }
    })
})

module.exports = router;