// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import sequelize from "./config/databaseConfig";
// import authRoutes from "./routes/authRoutes";

// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json());

// // Rotas
// app.use("/api/auth", authRoutes);

// // Teste de conexão ao banco de dados
// sequelize
//   .authenticate()
//   .then(() =>
//     console.log("Conexão com o banco de dados estabelecida com sucesso")
//   )
//   .catch((err) =>
//     console.error("Não foi possível conectar ao banco de dados:", err)
//   );

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/databaseConfig"; // Configuração do Sequelize
import authRoutes from "./routes/authRoutes"; // Rotas de autenticação
import { Cliente } from "./models/models"; // Importar o modelo de usuário

// Carregar variáveis de ambiente
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/auth", authRoutes);

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

// Porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
