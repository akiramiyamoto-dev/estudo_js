"use strict";
/********************************************************* */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const databaseConfig_js_1 = __importDefault(require("./config/databaseConfig.js")); // Configuração do Sequelize
const authRoutes_js_1 = __importDefault(require("./routes/authRoutes.js")); // Rotas de autenticação
const clientRoutes_js_1 = __importDefault(require("./routes/clientRoutes.js")); // Rotas relacionadas aos clientes
// import { Cliente } from "./models/models"; // Importar o modelo de cliente
// Carregar variáveis de ambiente
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middlewares globais
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || "http://localhost:5173", // Substitua pelo domínio do frontend
    methods: ["GET", "POST", "PUT", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, //Permitir cookies e headers de autenticação
}));
app.use(express_1.default.json());
// Middleware para servir arquivos estáticos (uploads)
app.use("/uploads", express_1.default.static(path_1.default.resolve(__dirname, "src", "uploads")));
// Rotas
app.use("/api/auth", authRoutes_js_1.default);
app.use("/api/clients", clientRoutes_js_1.default);
// Sincronizar o banco de dados e autenticar conexão
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Testar a conexão com o banco de dados
        yield databaseConfig_js_1.default.authenticate();
        console.log("Conexão com o banco de dados estabelecida com sucesso");
        // Sincronizar os modelos com o banco de dados
        yield databaseConfig_js_1.default.sync({ alter: true }); // Use `alter: true` para ajustar tabelas existentes
        console.log("Modelos sincronizados com o banco de dados.");
    }
    catch (error) {
        console.error("Erro ao conectar ou sincronizar com o banco de dados:", error);
    }
}))();
// Configuração da porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
