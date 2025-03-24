"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
// Carrega as variáveis de ambiente do arquivo .env
dotenv_1.default.config();
// Configuração do Sequelize usando variáveis de ambiente
const sequelize = new sequelize_1.Sequelize({
    dialect: process.env.DB_DIALECT, // Dialeto do banco
    host: process.env.DB_HOST, // Host do banco
    username: process.env.DB_USERNAME, // Usuário do banco
    password: process.env.DB_PASSWORD, // Senha do banco
    database: process.env.DB_NAME, // Nome do banco
    port: Number(process.env.DB_PORT), // Porta do banco
    logging: process.env.NODE_ENV === "development" ? console.log : false, // Ativa logs apenas no ambiente de desenvolvimento
});
exports.default = sequelize;
