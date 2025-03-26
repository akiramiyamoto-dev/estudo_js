// Arquivo principal da aplicação
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import sequelize from "./config/databaseConfig.js"; // Configuração do Sequelize
import authRoutes from "./routes/authRoutes.js"; // Rotas de autenticação
import clientRoutes from "./routes/clientRoutes.js"; // Rotas relacionadas aos clientes
import Stripe from "stripe"; // Importar a biblioteca Stripe

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
//Configuração do Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-02-24.acacia",
});

console.log("Frontend URL:", process.env.FRONTEND_URL);

// Middlewares globais
app.use(
  cors({
    origin: process.env.FRONTEND_URL, //VARIÁVEL DE AMBIENTE PARA A URL DO FRONTEND

    methods: ["GET", "POST", "PUT", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    credentials: true, //Permitir cookies e headers de autenticação
  })
);
app.use(express.json());

// Middleware para servir arquivos estáticos (uploads)
app.use("/uploads", express.static(path.resolve(__dirname, "src", "uploads")));

// Rota para criar uma seção de pagamento do Stripe
app.post("/api/checkout", async (req, res) => {
  try {
    const { productName, amount } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "jpy",
            product_data: {
              name: productName,
            },
            unit_amount: amount, //Valor em centavos
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });
    res.json({ url: session.url });
  } catch (error) {
    console.error("Erro ao criar a sessão de pagamento:", error);
    res.status(500).json({ error: "Erro ao criar a sessão de pagamento" });
  }
});

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
