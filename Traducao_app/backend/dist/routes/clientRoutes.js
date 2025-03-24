"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientController_js_1 = require("../controllers/clientController.js");
const authMiddleware_js_1 = require("../middleware/authMiddleware.js");
const uploadMiddleware_js_1 = require("../middleware/uploadMiddleware.js");
const router = (0, express_1.Router)();
// Rota para listar todos os clientes
// router.get("/clients", authMiddleware as RequestHandler, getAllClients);
router.get("/clients/:id/documents", authMiddleware_js_1.authMiddleware, clientController_js_1.getAllClients);
// Rota para upload de documentos
router.post("/documents/upload", authMiddleware_js_1.authMiddleware, // Verifica autenticação
uploadMiddleware_js_1.uploadMiddleware, // Middleware de upload para um único arquivo
clientController_js_1.uploadDocument // Controlador para processar o upload
);
exports.default = router;
