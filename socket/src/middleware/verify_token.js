import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ err: 1, message: "You're not authenticated" });
    const accessToken = token.split(" ")[1];
    jwt.verify(accessToken, process.env.TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ err: 1, message: "Token expired" })
        }
        req.user = user;
        next();
    })
}
export default verifyToken;