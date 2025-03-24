"use strict";
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
exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_js_1 = require("../models/models.js"); // Importando o modelo Cliente
// Registro de cliente
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, email, senha, telefone } = req.body;
    try {
        // Criptografar a senha
        const hashedPassword = yield bcrypt_1.default.hash(senha, 10);
        // Criar cliente no banco de dados
        const cliente = yield models_js_1.Cliente.create({
            nome,
            email,
            senha: hashedPassword,
            telefone,
        });
        // Retornar o cliente criado
        res.status(201).json(cliente);
    }
    catch (err) {
        console.error(err); // Log de erro
        res.status(500).json({ message: "Erro ao cadastrar cliente" });
    }
});
exports.register = register;
// Login de cliente
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, senha } = req.body;
    try {
        // Encontrar o cliente pelo email
        const cliente = (yield models_js_1.Cliente.findOne({ where: { email } }));
        // Verificar se o cliente existe
        if (!cliente) {
            return res.status(404).json({ message: "Cliente não encontrado" });
        }
        // Verificar se a senha está correta
        const isMatch = yield bcrypt_1.default.compare(senha, cliente.senha);
        if (!isMatch) {
            return res.status(400).json({ message: "Senha incorreta" });
        }
        // Gerar o token JWT
        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            return res.status(500).json({ message: "Chave JWT não configurada!" });
        }
        const token = jsonwebtoken_1.default.sign({ id: cliente.id, nome: cliente.nome }, jwtSecret, {
            expiresIn: "1h",
        });
        // Retornar o token
        res.json({ token, clienteId: cliente.id });
    }
    catch (err) {
        console.error(err); // Log de erro
        res.status(500).json({ message: "Erro no login" });
    }
});
exports.login = login;
