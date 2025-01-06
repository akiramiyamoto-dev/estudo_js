import { Router } from "express";
import { RequestHandler } from "express";
import { getAllClients } from "../controllers/clientController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.get(
  "/clients",
  authMiddleware as RequestHandler,
  getAllClients as RequestHandler
);

export default router;
