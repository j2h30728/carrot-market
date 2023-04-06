import { withApiSession } from "@/libs/client/withSession";
import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const id = req.query.id;
  const product = await client.product.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
    },
  });
  res.json({ ok: true, product });
}

export default withApiSession(
  withHandler({ methods: ["GET"], handler, isPrivate: false })
);
