const nodeMailer = require('nodemailer');

const sendEmail = async (options) => {

    const transporter = nodeMailer.createTransport({
        service:"gmail",
        auth:{
            user:"",
            password:"",
        }
    });

    const mailOptions = {
        from:"",
        to:options.email,
        subject:"",
        text:"",
    }
};

module.exports = sendEmail;