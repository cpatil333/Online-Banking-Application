import type { Request } from "express";
export type JwtUser = {
    id: number;
    fullName: string;
    role: "USER" | "ADMIN";
};
export declare function sign(user: JwtUser): string;
export declare function getUserFromReq(req: Request): JwtUser | null;
//# sourceMappingURL=auth.d.ts.map