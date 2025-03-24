import { Router } from "express";
import { register, login } from "../controllers/authController";
const router = Router();
// Rota de registro
router.post("/register", register);
// Rota de login
router.post("/login", login);
export default router;
