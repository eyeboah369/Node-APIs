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

    /* ***********************************  INSTRUCTIONS FOR GENERATING TRANSPORTER   **********************************************
    
        1. follow the syntax of the json attributes bellow inside of the transporter variable (host, port, secure, auth{}, type, user, clientId,
            clientSecret, refreshToken, accessToken) the last four attributes need special attention
        2. go to google developer API console and create a new project and enable to gmail API
        3. On the left hand panel click on credentials and click on OAuth2 client ID creator
        4. Scroll down to the bottom of the new client ID page to the authorized client URIs section and in the bottom most input field input:
                https://developers.google.com/oauthplayground
        5. Save the new clients OAuth2 client ID and the client id and secret will be generated an available to copy and paste in the json values below
        6. Then go back to https://developers.google.com/oauthplayground and click the settings icon and click on the option for using your own
            OAuth credentials and copy and paste the cleintID and clientSecret below in the input fields.
        7. To the left to input a value to Authorize APIs input ==> https://mail.google.com/ then click authorize
        8. When redirected give access to the project to the appropriate gmail account
        9. Click on the option to exchange Auth code for tokens and when generated copy the refresh token and access token into the json fields below
        10. Run the script and the email should be sent and good to go.
    
    
    */
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
                type: 'OAuth2',
<<<<<<< HEAD
                user: 'eyeboahcw@gmail.com',
                    clientId: 'CLIENT ID FROM CONSOLE',
                clientSecret: 'CLIENT SECRET FROM CONSOLE',
                refreshToken: 'REFRESH TOKEN FROM OAUTH PLAYGROUND',
                accessToken: 'ACCESS TOKEN FROM OAUTH PLAYGROUND'
=======
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
>>>>>>> 3422affbe8765f26bb510c65efa988403c15d004
           
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
