import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  client.user.create({
    data: {
      username: "이름",
      email: "이메일",
    },
  });
  res.json({
    ok: true,
  });
}
