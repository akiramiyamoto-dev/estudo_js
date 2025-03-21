import { Cliente } from "../models/models"; // Importe o modelo de User ou a interface apropriada

declare global {
  namespace Express {
    interface Request {
      user?: { id: number; nome: string }; // A propriedade user, que pode ser do tipo User ou qualquer outro
    }
  }
}
