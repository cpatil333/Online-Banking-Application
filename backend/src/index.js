import express from "express";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import dotenv from "dotenv";
import cors from "cors";
import { createContext } from "./context.js";
//import { fileURLToPath } from "url";
import path from "path";
import routerUpload from "./middleware/upload.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
app.use("/uploads", routerUpload);
app.use("/uploads", express.static(path.join(process.cwd(), "src", "uploads")));
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
await server.start();
app.use((req, res, next) => {
    if (!req.body && process.env.NODE_ENV !== "production") {
        req.body = {};
    }
    next();
});
app.use("/graphql", expressMiddleware(server, {
    context: async ({ req, res }) => await createContext({ req, res }),
}));
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is ready at http://localhost:${PORT}/graphql `);
});
//# sourceMappingURL=index.js.map