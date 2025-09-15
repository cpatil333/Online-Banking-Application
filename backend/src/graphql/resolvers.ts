import { typeDefs } from "./typeDefs.js";
import bcrypt from "bcrypt";
import type { Context } from "../context.js";
import { sign } from "../auth/auth.js";

function requiredRole(ctx: Context, roles: String[]) {
  if (!ctx.user || !roles.includes(ctx.user.role)) {
    throw new Error("Not Authorized!");
  }
}

export const resolvers = {
  Query: {
    users: async (parent: any, args: any, ctx: Context) => {
      return ctx.prisma.user.findMany();
    },
  },

  Mutation: {
    register: async (parent: any, { input }: any, ctx: Context) => {
      const user = await ctx.prisma.user.findFirst({
        where: { email: input.email },
      });
      if (user) {
        throw new Error("Email is already exist!");
      }

      const hassedPassword = await bcrypt.hash(input.password, 10);

      return ctx.prisma.user.create({
        data: {
          ...input,
          password: hassedPassword,
        },
      });
    },

    login: async (parent: any, { input }: any, ctx: Context) => {
      const user = await ctx.prisma.user.findFirst({
        where: { email: input.email },
      });
      if (!user) {
        throw new Error("Email does not exist!");
      }

      const matchedPassword = await bcrypt.compare(
        input.password,
        user.password
      );

      if (!matchedPassword) {
        throw new Error("Invalid Credentials!");
      }

      return {
        token: sign({
          id: Number(user?.id),
          fullName: String(user?.fullName),
          role: user?.role as "USER" | "ADMIN",
        }),
        user,
      };
    },

    createAccount: async (parent: any, { input }: any, ctx: Context) => {
      requiredRole(ctx, ["USER", "ADMIN"]);
      return ctx.prisma.account.create({
        data: {
          userId: parseInt(input.userId),
          type: input.type,
          balance: parseFloat(input.balance),
        },
      });
    },

    transactions: async (parent: any, { input }: any, ctx: Context) => {
      requiredRole(ctx, ["USER", "ADMIN"]);
      return ctx.prisma.transaction.create({
        data: {
          ...input,
        },
      });
    },
  },
};
