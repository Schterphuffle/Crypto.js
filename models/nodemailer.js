//Require dotenv file
//If you forget how to do the .env file here is a good resource to do this: https://www.youtube.com/watch?v=zDup0I2VGmk
require ('dotenv').config();
//Require Nodemailer 
const nodemailer = requie("nodemailer");

//How to do this: https://nodemailer.com/usage/using-gmail/ , https://blog.mailtrap.io/nodemailer-gmail/
//Enable Less Secure apps on your gmail account to use nodemailer with gmail https://support.google.com/accounts/answer/6010255?hl=en
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: MY_GMAIL_ADDRESS, 
        pass: MY_GMAIL_PASSWORD   
    }
});

const mailOptions = {
    // In the different resources they show the from as not the same as the auth, not sure if this will be a problem
    from: MY_GMAIL_ADDRESS,
    to: MY_HOTMAIL_ADDRESS,
    subject: 'MoneyTok, Thank you for creating an account', 
    //Add in a link back to MoneyTok, enable clicking this link to validate the account, add this link after Heroku deployment
    text: 'Click the following link to validate your new MoneyTok account'
}

transporter.sendMail(mailOptions, function(error, info){
    if (err) {
        console.log(err);
    } else {
        //Note use of a template literal here, want to review this? Go here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        console.log(`Email sent successfully + ${(info.response)}`);
    }
});