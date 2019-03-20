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
                user: 'eyeboahcw@gmail.com',
                clientId: '122144668851-94l16u0esjtln3or6u9m0v4akr8b68kn.apps.googleusercontent.com',
                clieentSecret: 'B7MGm4n-DoYvGus7qy_F-lMo',
                refreshToken: '1/qWNVwYXXBF1kKxgo9LTw3R33XjLzTVpxc6-6kRkDizY',
                accessToken: 'ya29.GlvSBjtngyPDJ7grazwYwbxl4k3B_P7l9iG97wbVjQAwzpD4OrwX0J27CVGSQBAoqdFBkx7cgVrqFYBJiIYD-_qipwt-eFi3cvRFeYNDUyZGNwpu8tPwXLU_1iCt'
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
