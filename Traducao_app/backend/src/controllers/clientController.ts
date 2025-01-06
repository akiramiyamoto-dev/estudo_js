import { Request, Response } from "express";
import { Cliente } from "../models/models";

// Obter todos os clientes
export const getAllClients = async (req: Request, res: Response) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar clientes" });
  }
};
