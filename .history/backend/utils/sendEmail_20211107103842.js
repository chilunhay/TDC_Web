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
        to:""
    }
};

module.exports = sendEmail;