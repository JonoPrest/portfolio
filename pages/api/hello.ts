// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
var nodemailer = require("nodemailer");

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: local_settings.my_gmail_username,
      clientId: local_settings.my_oauth_client_id,
      clientSecret: local_settings.my_oauth_client_secret,
      refreshToken: local_settings.my_oauth_refresh_token,
      accessToken: local_settings.my_oauth_access_token,
    },
  });

  var mail = {
    from: "John Smith <me@mydomain.com>",
    to: "user@userdomain.com",
    subject: "Registration successful",
    text: "You successfully registered an account at www.mydomain.com",
    html: "<p>You successfully registered an account at www.mydomain.com</p>",
  };

  transporter.sendMail(mail, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      // see https://nodemailer.com/usage
      console.log("info.messageId: " + info.messageId);
      console.log("info.envelope: " + info.envelope);
      console.log("info.accepted: " + info.accepted);
      console.log("info.rejected: " + info.rejected);
      console.log("info.pending: " + info.pending);
      console.log("info.response: " + info.response);
    }
    transporter.close();
  });
  res.status(200).json({ name: "John Doe" });
}
