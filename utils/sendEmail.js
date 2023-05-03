import nodemailer from "nodemailer";

export const sendEmail = async (name, email, messages) => {
  // If no errors occur, send an email to the user
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_ADDRESS, // your email address
      pass: '@#Tiyani1234' // your email password
    },
  });

 // pass: process.env.EMAIL_PASS, // your email password

  const message = {
    from: "tiyani@gmail.com",
    to: process.env.EMAIL_ADDRESS,
    subject: "Email From School Website",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email From School Website</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: sans-serif;
              background-color: #f9f9f9;
            }
            
            .container {
              margin: 0 auto;
              max-width: 600px;
              background-color: #fff;
              box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
            }
            
            .header {
              background-color: #0071c5;
              color: #fff;
              padding: 20px;
              font-size: 24px;
              text-align: center;
            }
            
            .message {
              font-size: 16px;
              padding: 20px;
              line-height: 1.5;
            }
            
            .signature {
              font-size: 14px;
              text-align: right;
              padding: 20px;
              background-color: #0071c5;
              color: #fff;
            }
            
            .signature a {
              color: #fff;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">Email From School Website</div>
            <div class="message">${messages}</div>
            <div class="signature">Best regards,<br>${name}<br>${email}
          </div>
        </body>
      </html>
    `,
  };
  




  await transporter.sendMail(message);
};
