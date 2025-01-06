import { Model, DataTypes } from "sequelize";
import sequelize from "../config/databaseConfig"; // Caminho correto para a configuração do sequelize

class Cliente extends Model {
  id!: number;
  nome!: string;
  email!: string;
  senha!: string;
  telefone!: string;
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
  },
  {
    sequelize,
    modelName: "Cliente",
    tableName: "clientes",
  }
);

export { Cliente };
