import { Model, DataTypes } from "sequelize";
import sequelize from "../config/databaseConfig.js"; // Caminho correto para a configuração do sequelize

class Cliente extends Model {
  id!: number;
  nome!: string;
  email!: string;
  senha!: string;
  telefone!: string;
  documentoPath!: string; // Novo campo para armazenar o caminho do documento
}

Cliente.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    documentoPath: {
      // Novo campo para o caminho do arquivo
      type: DataTypes.STRING,
      allowNull: true, // O campo pode ser nulo se o cliente não tiver um documento
    },
  },
  {
    sequelize,
    modelName: "Cliente",
    tableName: "clientes",
  }
);

export { Cliente };
