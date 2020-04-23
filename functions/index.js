
const functions = require('firebase-functions');
const nodemailer = require("nodemailer");
const admin = require('firebase-admin');
const accountSid = 'ACd5dd547737971988ec77e6014c9d290e';
const authToken = 'ba4e35dab390c16ff9786bfbc0a86300';
const client = require('twilio')(accountSid, authToken);
admin.initializeApp();


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:process.env.USER_EMAIL,
      pass: process.env.USER_PASS // naturally, replace both with your real credentials or an application-specific password
    }
  });


exports.newUpdate = functions.database
.ref('/users/{userID}')
.onCreate((snapshot, context) => {
    // Get an object representing the document
    // e.g. {'name': 'Marie', 'age': 66}
    const original = snapshot.val();

    client.messages
  . create({
        body: 'This is to alert you that an offense was made at ' + original.Location + ' at ' + original.Timestamp+ '. Please view your dashboard at https://idp-app-70f95.firebaseapp.com/ for more details.',
        from: '+12028836352',
         to: '+601136776256'
    })
    .then(message => console.log(message.sid));

    // access a particular field as you would any JS propert
    const mailOptions = {
        from: '700016387@student.curtin.edu.my',  // You can write any mail Adress you want this doesn't effect anything
        to: '700016387@student.curtin.edu.my', // This mail adress should be filled with any mail you want to read it
        tile: 'Functions Alert',
        subject: 'Smoking Offence Alert', // Sample Subject for you template
        html: `<body style="margin: 0; padding: 0;"> 
            <table border="0" cellpadding="0" cellspacing="0" width="100%"> 
                <tr>
                    <td style="padding: 10px 0 30px 0;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse;">
                            <tr>
                                <td align="center" bgcolor="#70bbd9" style="padding: 40px 0 30px 0; color: #153643; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/h1.gif" alt="Smoking Offence Alert" width="300" height="230" style="display: block;" />
                                </td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">
                                                
                                                <b> Hey!</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                                This is to alert you that an offense was made at ${original.Location} at ${original.Timestamp}. Please view your dashboard at https://idp-app-70f95.firebaseapp.com/ for more details.
                                            </td>
                                        </tr>
                                        <tr>
            
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>                
                        </table>
                    </td>
                </tr>
            </table>
        </body>
            ` // email content in HTML. You can write any Html template in here
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
    
});

