import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Cliente } from "../models/models"; // Importando o modelo Cliente

// Registro de cliente
export const register = async (req: Request, res: Response) => {
  const { nome, email, senha, telefone } = req.body;

  try {
    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Criar cliente no banco de dados
    const cliente = await Cliente.create({
      nome,
      email,
      senha: hashedPassword,
      telefone,
    });

    // Retornar o cliente criado
    res.status(201).json(cliente);
  } catch (err) {
    console.error(err); // Log de erro
    res.status(500).json({ message: "Erro ao cadastrar cliente" });
  }
};

// Login de cliente
export const login = async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  try {
    // Encontrar o cliente pelo email
    const cliente = (await Cliente.findOne({ where: { email } })) as Cliente;

    // Verificar se o cliente existe
    if (!cliente) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    // Verificar se a senha está correta
    const isMatch = await bcrypt.compare(senha, cliente.senha);
    if (!isMatch) {
      return res.status(400).json({ message: "Senha incorreta" });
    }

    // Gerar o token JWT
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      return res.status(500).json({ message: "Chave JWT não configurada!" });
    }

    const token = jwt.sign({ id: cliente.id, nome: cliente.nome }, jwtSecret, {
      expiresIn: "1h",
    });

    // Retornar o token
    res.json({ token });
  } catch (err) {
    console.error(err); // Log de erro
    res.status(500).json({ message: "Erro no login" });
  }
};
