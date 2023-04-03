import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(401).end();
  }

  console.log("sever", req.body);
  return res.status(201).json({ email: req.body.email, phone: req.body.phone });
}
