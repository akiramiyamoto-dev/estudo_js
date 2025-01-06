import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Configuração do Sequelize usando variáveis de ambiente
const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT as "mysql" | "mariadb", // Dialeto do banco
  host: process.env.DB_HOST, // Host do banco
  username: process.env.DB_USERNAME, // Usuário do banco
  password: process.env.DB_PASSWORD, // Senha do banco
  database: process.env.DB_NAME, // Nome do banco
  port: Number(process.env.DB_PORT), // Porta do banco
  logging: process.env.NODE_ENV === "development" ? console.log : false, // Ativa logs apenas no ambiente de desenvolvimento
});

// // Configuração do Sequelize
// const sequelize = new Sequelize({
//   dialect: "mysql", // Pode ser "mariadb" também, dependendo do que você usa
//   host: "localhost", // Endereço do banco
//   username: "root", // Usuário do banco
//   password: "new", // Senha do banco
//   database: "traducao", // Nome do banco de dados
//   port: 3306, // Porta padrão do MySQL
//   logging: (msg) => console.log(msg), // Para exibir as queries no console (opcional)
// });

// Exporta a instância do Sequelize para uso em outros arquivos
export default sequelize;
