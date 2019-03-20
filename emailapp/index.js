const express = require('express');
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

    /*var app = express();                  ******************  SUBSEQUENT CODE FOR ROUTING  ********************************************

    app.listen(8080, function() {
        console.log('Server running on port 8080');
    });

    app.get('/', function(req, res){
        res.send('GET request works');
    });*/

    var transporter = nodemailer.createTransport({
        service: 'gmail',

        auth: {
           
                user: '',
                clientId: '',
                clieentSecret: '',
                clientToken: '',
                accessToken: ''
           
        },
    });

    var emailOptions = {
        from: '',
        to: '',
        subject: 'Test email',
        html: '<h1>Congrats you got it to work! You got this!</h1>',
    };

    transporter.sendMail(emailOptions, function(err, info) {
        if(err){
            console.log(err);
        }
        else{
            console.log(info);
        }
    });
