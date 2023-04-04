import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body;
  const exisist = await client.token.findUnique({
    where: {
      payload: token,
    },
  });
  if (!exisist)
    return res.status(404).json({ ok: false, text: "잘못된 토큰입니다." });
  req.session.user = {
    id: exisist?.userId,
  };
  await req.session.save();
  console.log(token);
  console.log(exisist);
  return res.status(201).json({ ok: true, text: "토큰 확인되었습니다." });
}

export default withIronSessionApiRoute(withHandler("POST", handler), {
  cookieName: "carrotsession",
  password: "sfasdasddd!@#!ldkjadkljaskdljasdklasdmlaksdaslkdjalskdadlksa",
});
