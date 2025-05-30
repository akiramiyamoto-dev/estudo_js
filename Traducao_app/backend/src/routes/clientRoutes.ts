import { RequestHandler, Router } from "express";
import {
  getAllClients,
  uploadDocument,
} from "../controllers/clientController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { uploadMiddleware } from "../middleware/uploadMiddleware.js";

const router = Router();

// Rota para listar todos os clientes
// router.get("/clients", authMiddleware as RequestHandler, getAllClients);
router.get(
  "/clients/:id/documents",
  authMiddleware as RequestHandler,
  getAllClients
);

// Rota para upload de documentos
router.post(
  "/documents/upload",
  authMiddleware as RequestHandler, // Verifica autenticação
  uploadMiddleware, // Middleware de upload para um único arquivo
  uploadDocument as RequestHandler // Controlador para processar o upload
);

export default router;
