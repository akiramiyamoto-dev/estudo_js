"use strict";
/***************************************************************************** */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadDocument = exports.getAllClients = void 0;
const models_js_1 = require("../models/models.js"); // Supondo que você tenha um modelo Cliente
// Controlador para obter todos os clientes (já foi discutido)
const getAllClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Lógica para buscar clientes (atualmente uma resposta de exemplo)
        res.status(200).json({ message: "Lista de clientes" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao buscar clientes" });
    }
});
exports.getAllClients = getAllClients;
// Controlador para upload de documentos
const uploadDocument = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Verifica se o arquivo foi enviado
        if (!req.file) {
            return res.status(400).json({ message: "Nenhum arquivo enviado!" });
        }
        // Verificação de tipo de arquivo (opcional)
        if (!["application/pdf", "image/jpeg", "image/png"].includes(req.file.mimetype)) {
            return res.status(400).json({
                message: "Tipo de arquivo inválido. Aceitamos apenas PDF, JPG ou PNG.",
            });
        }
        // Renomeação do arquivo para garantir que o nome seja único (opcional)
        const timestamp = Date.now();
        const uniqueFileName = `${timestamp}-${req.file.originalname}`;
        // Caminho do arquivo salvo
        const filePath = req.file.path; // A variável filePath já pode ser usada no banco de dados ou para respostas.
        // const filePath = `http://localhost:5000/uploads/${uniqueFileName}`;
        // (Opcional) Salvar o caminho do arquivo no banco de dados, associando ao cliente (caso seja necessário)
        const clienteId = req.body.clienteId; // Supondo que o clienteId seja enviado no corpo da requisição
        const cliente = yield models_js_1.Cliente.findByPk(clienteId);
        if (!cliente) {
            return res.status(404).json({ message: "Cliente não encontrado!" });
        }
        // Salva o caminho do arquivo no banco de dados (opcional)
        cliente.documentoPath = filePath;
        yield cliente.save();
        // Resposta de sucesso com o caminho do arquivo
        res.status(200).json({
            message: "Upload bem-sucedido!",
            filePath: `https://localhost:5000/uploads/${uniqueFileName}`, // Caminho completo
            fileName: uniqueFileName, // Retorna o nome do arquivo renomeado, caso tenha feito renomeação
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao fazer upload do arquivo" });
    }
});
exports.uploadDocument = uploadDocument;
