//Require dotenv file
require ('dotenv').config();
//Require Nodemailer 
const nodemailer = requie("nodemailer");

// INIT
var myString = "blablabla Card game bla";
var myPassword = "myPassword";

// PROCESS
var encrypted = CryptoJS.AES.encrypt(myString, myPassword);
var decrypted = CryptoJS.AES.decrypt(encrypted, myPassword);
document.getElementById("demo0").innerHTML = myString;
document.getElementById("demo1").innerHTML = encrypted;
document.getElementById("demo2").innerHTML = decrypted;
document.getElementById("demo3").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: MY_GMAIL_ADDRESS, 
        pass: MY_GMAIL_PASSWORD   }
})

