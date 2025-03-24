"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const sequelize_1 = require("sequelize");
const databaseConfig_js_1 = __importDefault(require("../config/databaseConfig.js")); // Caminho correto para a configuração do sequelize
class Cliente extends sequelize_1.Model {
}
exports.Cliente = Cliente;
Cliente.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    documentoPath: {
        // Novo campo para o caminho do arquivo
        type: sequelize_1.DataTypes.STRING,
        allowNull: true, // O campo pode ser nulo se o cliente não tiver um documento
    },
}, {
    sequelize: databaseConfig_js_1.default,
    modelName: "Cliente",
    tableName: "clientes",
});
