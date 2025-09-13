import { PrismaClient } from "@prisma/client";
import { getUserFromReq } from "./auth/auth.js";
const prisma = new PrismaClient();
export async function createContext({ req, res, }) {
    const user = getUserFromReq(req);
    return { prisma, user };
}
//# sourceMappingURL=context.js.map