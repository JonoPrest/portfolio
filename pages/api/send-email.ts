// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer, { SendMailOptions, Transporter } from "nodemailer";
import { google } from "googleapis";


type Data = {
  message: string;
  success: boolean;
};

export type emailMessageRequestData = {
  message: string;
  name: string;
  email: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {


  const body: emailMessageRequestData = req.body;


  const mail: SendMailOptions = {
    from: `${body.name} <${body.email}>`,
    to: body.email,
    subject: `New Message from ${body.name}`,
    text: `Ping! You got mail from your website :) \n\n${body.name} had the following to say:\n\n${body.message} \n\nGet back to them at mailto:${body.email}`,
  };

  const autoResponder: SendMailOptions = {
    from: "Jono Prest <jjprest@gmail.com>",
    to: body.email,
    subject: "Thanks for your message!",
    text: "Hi there,\n\nThanks so much for getting in touch.\n\n This is just an automated message to say your email was received and I will get back to you as soon as possible.\n\nKind regards,\nJono Prest",
  };

  const OAuth2 = google.auth.OAuth2;

  const oauth2Client = new OAuth2(process.env.MY_OAUTH_CLIENT_ID, process.env.MY_OAUTH_CLIENT_SECRET, "https://developers.google.com/oauthplayground")

  oauth2Client.setCredentials({
    refresh_token: process.env.MY_OAUTH_REFRESH_TOKEN
  });


  oauth2Client.getAccessToken().then(accessToken => {

    const transporter: Transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: process.env.MY_GMAIL_USERNAME,
        clientId: process.env.MY_OAUTH_CLIENT_ID,
        clientSecret: process.env.MY_OAUTH_CLIENT_SECRET,
        refreshToken: process.env.MY_OAUTH_REFRESH_TOKEN,
        accessToken: accessToken?.token || ""
      },
    });


    return transporter
  }).then(transporter => {
    transporter.sendMail(mail)

      .then((info) => {
        console.log(info);
        return transporter.sendMail(autoResponder);
      })
      .then((info) => {
        console.log(info);
        transporter.close();
        res.status(200).json({ success: true, message: "Successfully Sent" });
      })
      .catch((err) => {
        console.error(err);

        transporter.close();
        res.status(500).send({ success: false, message: err.message });
      });
  }).catch(err => {
    let errMessage = "OAuth Error: " + err.message

    console.error(errMessage)


    res.status(500).send({ success: false, message: errMessage })
  })
}
