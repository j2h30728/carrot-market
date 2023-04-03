import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  client.user.create({
    data: {
      email: "qqqqqq",
      username: "qqqqqq",
      password: "qqqqqq",
    },
  });

  client.tweet.create({
    data: {
      text: "이거 되나",
      user: {
        create: {
          email: "qqqqqq",
          username: "qqqqqq",
          password: "qqqqqq",
        },
      },
    },
  });
  res.json({
    ok: true,
  });
}
