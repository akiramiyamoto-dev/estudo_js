"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_js_1 = require("../controllers/authController.js");
const router = (0, express_1.Router)();
// Rota de registro
router.post("/register", authController_js_1.register);
// Rota de login
router.post("/login", authController_js_1.login);
exports.default = router;
