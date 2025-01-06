import { Router } from "express";
import { register, login } from "../controllers/authController";
import { RequestHandler } from "express";
const router = Router();

// Rota de registro
router.post("/register", register as RequestHandler);
// Rota de login
router.post("/login", login as RequestHandler);

export default router;
