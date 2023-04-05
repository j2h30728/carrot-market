import client from "@/lib/server/client";
import withHandler, { ResponseType } from "@/lib/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email, name } = req.body;
  if (!email || !name)
    return res.status(404).json({ ok: false, text: "잘못된 입력입니다.." });
  const user = await client.user.findUnique({
    where: {
      email,
    },
  });
  if (user)
    return res
      .status(400)
      .json({ ok: false, text: "이미 존재하는 유저입니다" });
  await client.user.create({
    data: {
      email,
      name,
    },
  });

  console.log(user);
  return res
    .status(201)
    .json({ ok: true, text: "회원가입 되었습니다. 로그인 부탁드립니다." });
}

export default withHandler({ method: "POST", handler, isPrivate: false });
