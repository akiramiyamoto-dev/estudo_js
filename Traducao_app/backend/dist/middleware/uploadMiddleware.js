"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadMiddleware = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const uploadPath = path_1.default.resolve(__dirname, "../uploads");
if (!fs_1.default.existsSync(uploadPath)) {
    fs_1.default.mkdirSync(uploadPath, { recursive: true });
}
// Configuração de armazenamento
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        // Define a pasta onde os arquivos serão armazenados
        // cb(null, path.resolve(__dirname, "../uploads"));
        cb(null, uploadPath); // Corrigido
    },
    filename: (req, file, cb) => {
        // Adiciona um timestamp único ao nome do arquivo para evitar duplicações
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});
// Filtro de arquivos permitidos
const fileFilter = (req, file, cb) => {
    const allowedTypes = ["application/pdf", "image/png", "image/jpeg"];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true); // Aceita o arquivo
    }
    else {
        cb(new Error("Tipo de arquivo não suportado!")); // Rejeita o arquivo
    }
};
// Configuração do middleware de upload
const upload = (0, multer_1.default)({
    storage,
    limits: { fileSize: 100 * 1024 * 1024 }, // Limite de 100mb
    fileFilter,
});
// Middleware para lidar com o upload de um único arquivo (campo "file")
const uploadMiddleware = (req, res, next) => {
    // Log para verificar se o arquivo foi enviado
    console.log("Arquivo recebido no middleware:", req.file); // Aqui, mostramos o arquivo recebido no middleware
    upload.single("file")(req, res, (err) => {
        if (err) {
            console.log("Erro durante o upload:", err); // Exibe o erro, se houver
            return res
                .status(400)
                .json({ message: "Erro no upload do arquivo", error: err.message });
        }
        // Log para verificar se o arquivo foi enviado
        console.log("Arquivo recebido no middleware:", req.file); // Aqui, mostramos o arquivo recebido após o upload
        next();
    });
};
exports.uploadMiddleware = uploadMiddleware;
