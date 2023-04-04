import { withApiSession } from "@/libs/client/withSession";
import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body;
  const foundToken = await client.token.findUnique({
    where: {
      payload: token,
    },
  });
  if (!foundToken)
    return res.status(404).json({ ok: false, text: "잘못된 토큰입니다." });
  req.session.user = {
    id: foundToken?.userId,
  };
  await req.session.save();
  await client.token.deleteMany({
    where: {
      userId: foundToken.userId,
    },
  });
  return res.status(201).json({ ok: true, text: "토큰 확인되었습니다." });
}
export default withApiSession(withHandler({ method: "POST", handler }));
