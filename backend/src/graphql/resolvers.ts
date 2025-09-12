import { typeDefs } from "./typeDefs.js";
import bcrypt from "bcrypt";
import { getUserFromReq } from "../auth/auth.js";
import type { Context } from "../context.js";

export const resolvers = {
  Query: {},
  Mutation: {},
};
