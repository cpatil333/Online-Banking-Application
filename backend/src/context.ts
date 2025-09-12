import { PrismaClient } from "@prisma/client";
import { getUserFromReq } from "./auth/auth.js";
import type { JwtUser } from "./auth/auth.js";

const prisma = new PrismaClient();

export type Context = {
  prisma: PrismaClient;
  user: JwtUser | null;
};

export async function createContext({
  req,
  res,
}: {
  req: any;
  res: any;
}): Promise<Context> {
  const user = getUserFromReq(req);
  return { prisma, user };
}
