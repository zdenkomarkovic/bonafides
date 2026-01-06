"use server";

import Mailjet from "node-mailjet";

const MAILJET_API_KEY = process.env.MAILJET_API_KEY;
const MAILJET_SECRET_KEY = process.env.MAILJET_SECRET_KEY;
const SITE_MAIL_SENDER = process.env.SITE_MAIL_SENDER || "bonafidesnova@gmail.com";
const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECEIVER || "bonafidesnova@gmail.com";

const mailjet = Mailjet.apiConnect(
  MAILJET_API_KEY || "",
  MAILJET_SECRET_KEY || ""
);

export async function sendMail({
  email,
  sendTo,
  subject,
  text,
  html,
}: {
  email: string;
  sendTo?: string;
  subject: string;
  text: string;
  html?: string;
}) {
  try {
    const request = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: SITE_MAIL_SENDER,
            Name: "Bonafides Nekretnine",
          },
          To: [
            {
              Email: sendTo || SITE_MAIL_RECEIVER,
              Name: "Bonafides",
            },
          ],
          Subject: subject,
          TextPart: text,
          HTMLPart: html || `<p>${text.replace(/\n/g, "<br>")}</p>`,
          ReplyTo: {
            Email: email,
            Name: "Klijent",
          },
        },
      ],
    });

    console.log("Message Sent", request.body);
    console.log("Mail sent to", sendTo || SITE_MAIL_RECEIVER);

    return {
      messageId: request.body.Messages?.[0]?.To?.[0]?.MessageID || "sent",
      success: true,
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      messageId: null,
      success: false,
      error,
    };
  }
}
