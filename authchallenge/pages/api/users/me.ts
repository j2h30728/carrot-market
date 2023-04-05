import { withApiSession } from "@/lib/client/withSession";
import client from "@/lib/server/client";
import withHandler, { ResponseType } from "@/lib/server/withHandler";
import { NextApiRequest } from "next";
import { NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const profile = await client.user.findUnique({
    where: {
      id: req.session.user?.id,
    },
  });
  if (!profile)
    return res.status(401).json({ ok: false, text: "잘못된 요청입니다." });

  return res.status(201).json({ ok: true, profile });
}

export default withApiSession(
  withHandler({ method: "GET", handler, isPrivate: true })
);
