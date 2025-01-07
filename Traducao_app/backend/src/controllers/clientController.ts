/***************************************************************************** */

import { Request, Response } from "express";
import { Cliente } from "../models/models"; // Supondo que você tenha um modelo Cliente

// Controlador para obter todos os clientes (já foi discutido)
export const getAllClients = async (req: Request, res: Response) => {
  try {
    // Lógica para buscar clientes (atualmente uma resposta de exemplo)
    res.status(200).json({ message: "Lista de clientes" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar clientes" });
  }
};

// Controlador para upload de documentos
export const uploadDocument = async (req: Request, res: Response) => {
  try {
    // Verifica se o arquivo foi enviado
    if (!req.file) {
      return res.status(400).json({ message: "Nenhum arquivo enviado!" });
    }

    // Verificação de tipo de arquivo (opcional)
    if (
      !["application/pdf", "image/jpeg", "image/png"].includes(
        req.file.mimetype
      )
    ) {
      return res.status(400).json({
        message: "Tipo de arquivo inválido. Aceitamos apenas PDF, JPG ou PNG.",
      });
    }

    // Renomeação do arquivo para garantir que o nome seja único (opcional)
    const timestamp = Date.now();
    const uniqueFileName = `${timestamp}-${req.file.originalname}`;

    // Caminho do arquivo salvo
    const filePath = req.file.path; // A variável filePath já pode ser usada no banco de dados ou para respostas.

    // (Opcional) Salvar o caminho do arquivo no banco de dados, associando ao cliente (caso seja necessário)
    const clienteId = req.body.clienteId; // Supondo que o clienteId seja enviado no corpo da requisição
    const cliente = await Cliente.findByPk(clienteId);

    if (!cliente) {
      return res.status(404).json({ message: "Cliente não encontrado!" });
    }

    // Salva o caminho do arquivo no banco de dados (opcional)
    cliente.documentoPath = filePath;
    await cliente.save();

    // Resposta de sucesso com o caminho do arquivo
    res.status(200).json({
      message: "Upload bem-sucedido!",
      filePath,
      fileName: uniqueFileName, // Retorna o nome do arquivo renomeado, caso tenha feito renomeação
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao fazer upload do arquivo" });
  }
};
