import jwt from "jsonwebtoken";
// Middleware para verificar o token JWT
export const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        return res
            .status(401)
            .json({ message: "Acesso negado. Token não fornecido." });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
        console.log("Decoded token:", decoded); // Verifique se o id e email estão no decoded
    }
    catch (error) {
        return res.status(401).json({ message: "autorização de Token inválido." });
    }
};
