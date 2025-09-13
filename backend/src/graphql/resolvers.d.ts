import type { Context } from "../context.js";
export declare const resolvers: {
    Query: {
        users: (parent: any, args: any, ctx: Context) => Promise<{
            id: number;
            fullName: string;
            email: string;
            password: string;
            imageUrl: string;
            role: string;
            createdAt: Date;
        }[]>;
    };
    Mutation: {
        register: (parent: any, { input }: any, ctx: Context) => Promise<{
            id: number;
            fullName: string;
            email: string;
            password: string;
            imageUrl: string;
            role: string;
            createdAt: Date;
        }>;
        login: (parent: any, { input }: any, ctx: Context) => Promise<{
            token: string;
            user: {
                id: number;
                fullName: string;
                email: string;
                password: string;
                imageUrl: string;
                role: string;
                createdAt: Date;
            };
        }>;
        createAccount: (parent: any, { input }: any, ctx: Context) => Promise<{
            id: number;
            type: string;
            balance: number;
            userId: number;
        }>;
        transactions: (parent: any, { input }: any, ctx: Context) => Promise<{
            id: number;
            createdAt: Date;
            type: string;
            amount: number;
            note: string | null;
            accountId: number;
        }>;
    };
};
//# sourceMappingURL=resolvers.d.ts.map