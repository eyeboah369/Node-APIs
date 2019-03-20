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
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
<<<<<<< HEAD
                type: 'OAuth2',
                user: 'USER EMAIL ACCOUNT THAT SENDS EMAIL',
                clientId: 'GENERATED CLIENTID',
                clieentSecret: 'GENERATED CLIENT SECRET',
                refreshToken: 'GENERATED REFRESH TOKEN',
                accessToken: 'GENERATED ACCESS TOKEN'
=======
           
                user: '',
                clientId: '',
                clieentSecret: '',
                clientToken: '',
                accessToken: ''
>>>>>>> 6942e54450636787e3f45a5708b4082c73398b83
           
        },
    });

    var emailOptions = {
        from: 'USER EMAIL SENDING THE EMAIL',
        to: 'EMAIL RECIEVING THE MESSAGE',
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
