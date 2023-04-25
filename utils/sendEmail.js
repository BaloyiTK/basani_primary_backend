import nodemailer from "nodemailer";

export const sendEmail = async (name, email, messages) => {
  // If no errors occur, send an email to the user
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_ADDRESS, // your email address
      pass: process.env.EMAIL_PASS, // your email password
    },
  });

  console.log(process.env.EMAIL_ADDRESS);

  const message = {
    from: "tiyani@gmail.com",
    to: process.env.EMAIL_ADDRESS,
    subject: "Email From school website",
    html: `
              <!DOCTYPE html>
              <html>
                <head>
                  <title>Email From school website</title>
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  <style>
                    body {
                      margin: 0;
                      padding: 0;
                      background-color: #f9f9f9;
                    }
                    .container {
                     
                      margin: 5px auto;
                    
                      background-color: #fff;
                      box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
                     
                    }
                  
                    .message {
                      font-size: 16px;
                      margin-bottom: 20px;
                      line-height: 1.5;
                    }
                    .signature {
                      margin-top: 20px;
                      font-size: 14px;
                      text-align: left;
                      padding-top: 10px;
                    }
                  </style>
                </head>
                <body>
                  <div class="container">
                   
                    <div class="message">${messages}</div>
                    <div class="signature">Best regards,<br>${name}<br>${email}</div>
                  </div>
                </body>
              </html>
            `,
};




  await transporter.sendMail(message);
};
