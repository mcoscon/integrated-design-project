
const functions = require('firebase-functions');
const nodemailer = require("nodemailer");
const admin = require('firebase-admin');
admin.initializeApp();


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '700016387@student.curtin.edu.my',
      pass: '##' // naturally, replace both with your real credentials or an application-specific password
    }
  });


exports.createUser = functions.firestore
.document('test/{Id}')
.onCreate((snap, context) => {
    // Get an object representing the document
    // e.g. {'name': 'Marie', 'age': 66}
    const datas = snap.data();

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
                                    <img src="data:image/jpeg;base64,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" alt="Creating Email Magic" width="300" height="230" style="display: block;" />
                                </td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">
                                                
                                                <b> "${datas.date}</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                                ${datas.place}
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

exports.generateThumbnail = functions.storage.object().onFinalize(async (object) => {
    console.log(object.name);
    /*
    storageRef.child(object.name).getDownloadURL().then(function(url) {
        // `url` is the download URL for 'images/stars.jpg'
    
        // Or inserted into an <img> element:
        console.log(object.name);
        console.log(url);
        var img = document.getElementById('myimg');
        img.src = url;
    }).catch(function(error) {
        // Handle any errors
    });
    */
  });
