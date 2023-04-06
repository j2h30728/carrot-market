import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";
import mail from "@sendgrid/mail";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
mail.setApiKey(process.env.SENDGRID_API_KEY as string);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email, phone } = req.body;
  const user = phone ? { phone: phone } : email ? { email } : null;
  if (!user)
    return res.status(400).json({ ok: false, text: "입력부탁드립니다." });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  if (phone) {
    // const message = await twilioClient.messages.create({
    //   messagingServiceSid: process.env.TWILIO_MSID,
    //   to: process.env.MY_PHONE as string,
    //   body: `Your login token is ${payload}`,
    // });
    // console.log(message);
  } else if (email) {
    // const sendEmail = await mail.send({
    //   from: "2148072@naver.com",
    //   to: "2148072@naver.com",
    //   subject: "캐럿마켓",
    //   text: `Your Carrot Market Verificaion Email`,
    //   html: `<strong>Your token is ${payload}</strong>`,
    // });
    // console.log("email", sendEmail);
  }

  console.log(token);
  return res.status(201).json({ ok: true, text: "로그인 되었습니다." });
}

export default withHandler({ methods: ["POST"], handler, isPrivate: false });
