import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  id: number;
  nome: string;
}
interface AuthenticatedRequest extends Request {
  user?: JwtPayload; // Substitua "any" pelo tipo real do seu `decoded`
}

interface JwtPayload {
  id: number;
  email: string;
}

// Middleware para verificar o token JWT
export const authMiddleware = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Acesso negado. Token não fornecido." });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;
    req.user = decoded;
    next();
    console.log("Decoded token:", decoded); // Verifique se o id e email estão no decoded
  } catch (error) {
    return res.status(401).json({ message: "autorização de Token inválido." });
  }
};
