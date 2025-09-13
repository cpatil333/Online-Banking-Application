import jwt from "jsonwebtoken";
import type { Request } from "express";
import dotenv from "dotenv";
dotenv.config();

const SECRET = process.env.SECRET_KEY!;

export type JwtUser = {
  id: number;
  fullName: string;
  role: "USER" | "ADMIN";
};

export function sign(user: JwtUser) {
  return jwt.sign(user, SECRET, { expiresIn: "7d" });
}

export function getUserFromReq(req: Request): JwtUser | null {
  const token = req.headers["authorization"]?.replace("Bearer", "");
  if (!token) return null;
  try {
    return jwt.verify(token, SECRET) as JwtUser;
  } catch (error) {
    return null;
  }
}
