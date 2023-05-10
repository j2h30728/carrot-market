import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}
const cookieOptions = {
  cookieName: "challenge",
  password: process.env.COOKIE_PASSWORD as string,
};
export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
