const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());


app.post('/send', (req, res) => {
    const {name, email, message} = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS // naturally, replace both with your real credentials or an application-specific password
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New message from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error){
            return res.status(500).send(error.toString());
        }        
        res.status(200).send('Message sent sucessfully');
    });
});

app.listen(port, () => {
    console.log('Server is running on port ${port}');
});
