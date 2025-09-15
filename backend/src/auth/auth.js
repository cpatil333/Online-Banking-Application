import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET = process.env.SECRET_KEY;
export function sign(user) {
    return jwt.sign(user, SECRET, { expiresIn: "7d" });
}
export function getUserFromReq(req) {
    const token = req.headers["authorization"]?.replace("Bearer ", "");
    if (!token)
        return null;
    try {
        return jwt.verify(token, SECRET);
    }
    catch (error) {
        return null;
    }
}
//# sourceMappingURL=auth.js.map