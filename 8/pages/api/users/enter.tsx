import withHandler from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("sever", req.body);
  return res.status(201).json({ email: req.body.email, phone: req.body.phone });
}

export default withHandler("POST", handler);
