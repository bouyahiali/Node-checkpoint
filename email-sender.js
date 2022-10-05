const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@gmail.com",
    pass: "************",
  },
});

const mailOptions = {
  from: "youremail@gmail.com",
  to: "ABS-email@gmail.com",
  subject: "Sending Email using Node.js",
  text: "Hello ABS",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});