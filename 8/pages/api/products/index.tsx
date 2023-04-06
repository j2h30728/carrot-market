import { withApiSession } from "@/libs/client/withSession";
import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    body: { name, price, description },
    session: { user },
  } = req;
  const product = await client.product.create({
    data: {
      name,
      price: Number(price),
      description,
      image: "",
      user: {
        connect: {
          id: user?.id,
        },
      },
    },
  });
  return res.status(201).json({ ok: true, product });
}

export default withApiSession(withHandler({ method: "POST", handler }));
