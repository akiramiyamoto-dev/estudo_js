import { Request, Response, NextFunction } from "express";
import multer from "multer";
import { Error } from "sequelize";

// Configuração de armazenamento de arquivos (local)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Defina a pasta onde os arquivos serão armazenados
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const fileName = `${timestamp}-${file.originalname}`;
    cb(null, fileName);
  },
});

// Validação do tipo de arquivo e tamanho
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  if (
    file.mimetype === "application/pdf" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true); // Aceitar o arquivo
  } else {
    cb(
      new Error(
        "Tipo de arquivo não permitido. Aceitamos apenas PDF, JPG ou PNG."
      ),
      false
    ); // Rejeitar o arquivo
  }
};

// Limite de tamanho do arquivo (5MB neste caso)
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

// Middleware para fazer upload de um arquivo (utiliza o campo 'file')
export const uploadMiddleware = upload.single("file");
