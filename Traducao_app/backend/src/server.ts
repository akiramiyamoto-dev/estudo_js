/********************************************************* */

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import sequelize from "./config/databaseConfig.js"; // Configuração do Sequelize
import authRoutes from "./routes/authRoutes.js"; // Rotas de autenticação
import clientRoutes from "./routes/clientRoutes.js"; // Rotas relacionadas aos clientes
// import { Cliente } from "./models/models"; // Importar o modelo de cliente

// Carregar variáveis de ambiente
dotenv.config();

const app = express();

// Middlewares globais
app.use(
  cors({
    origin: "https://estudo-js-eight.vercel.app/", // Substitua pelo domínio do frontend
    methods: ["GET", "POST", "PUT", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, //Permitir cookies e headers de autenticação
  })
);
app.use(express.json());

// Middleware para servir arquivos estáticos (uploads)
app.use("/uploads", express.static(path.resolve(__dirname, "src", "uploads")));

// Rotas
app.use("/api/auth", authRoutes);
app.use("/api/clients", clientRoutes);

// Sincronizar o banco de dados e autenticar conexão
(async () => {
  try {
    // Testar a conexão com o banco de dados
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso");

    // Sincronizar os modelos com o banco de dados
    await sequelize.sync({ alter: true }); // Use `alter: true` para ajustar tabelas existentes
    console.log("Modelos sincronizados com o banco de dados.");
  } catch (error) {
    console.error(
      "Erro ao conectar ou sincronizar com o banco de dados:",
      error
    );
  }
})();

// Configuração da porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
