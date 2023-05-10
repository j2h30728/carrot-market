import { withApiSession } from "@/lib/server/withSession";
import client from "@/lib/server/client";
import withHandler, { ResponseType } from "@/lib/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email } = req.body;
  if (!email)
    return res.status(404).json({ ok: false, text: "잘못된 입력입니다.." });
  const user = await client.user.findUnique({
    where: {
      email,
    },
  });
  if (!user)
    return res
      .status(400)
      .json({ ok: false, text: "존재하지 않는 유저입니다." });
  req.session.user = {
    id: user.id,
  };
  await req.session.save();
  return res.status(201).json({ ok: true, text: "로그인 되었습니다." });
}

export default withApiSession(
  withHandler({ method: "POST", handler, isPrivate: false })
);
