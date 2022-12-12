// import nodemailer from 'nodemailer';

// class EmailSender{
//   static async sendMail(to, subject, text) {
// const transporter = nodemailer.createTransport({
//   service: 'gmail', //'gmail',
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   ssl: false,
//   tls: true,
//   auth: {
//     //Gmail user: 'mansuribrahimnok@gmail.com',
//     user: 'mansuribrahimnok@gmail.com',//8294e4f60324e9',
//     //Gmail pass: 'eugepkjqwvciaiap' // naturally, replace both with your real credentials or an application-specific password
//     pass: 'eugepkjqwvciaiap'//6ee4754d4902b5' // naturally, replace both with your real credentials or an application-specific password
//   }
// });

// const mailOptions = {
//   from: 'mansuribrahimnok@gmail.com',
//   to: to,//'princemi007@gmail.com',
//   subject: subject,//'Invoices due',
//   text: text//'Hey baby, Will you marry me.'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
// 	console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
//   }
// }
// //EmailSender.sendMail('princemi007@gmail.com', 'subject', 'text')
// export default EmailSender;