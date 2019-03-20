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
           
                user: 'eyeboahcw@gmail.com',
                clientId: '122144668851-94l16u0esjtln3or6u9m0v4akr8b68kn.apps.googleusercontent.com',
                clieentSecret: 'B7MGm4n-DoYvGus7qy_F-lMo',
                clientToken: '1/JszIDJMOAhAwQ0MceEDvwkdaUtv5Zcnx7KBjnogE2_8',
                accessToken: 'ya29.GlvSBpU12cMSC0kTYqUWJb9B0fHnTGwA_HkkuFoTLj70mjZKu5Ck9_VjZiS77tbta92qw3S2kTnSujniRQs1vX0TblOqmJ5P16AQNlN9P5JU_TmgBHk7zuhZKEkL'
           
        },
    });

    var emailOptions = {
        from: 'eyeboahcw@gmail.com',
        to: 'eyeboah369@gmail.com',
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