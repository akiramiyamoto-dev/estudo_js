import { User } from "../models/models"; // Importe o modelo de User ou a interface apropriada

declare global {
  namespace Express {
    interface Request {
      user?: User; // A propriedade user, que pode ser do tipo User ou qualquer outro
    }
  }
}

// import * as express from "express";
// import { Request } from "express";
// import { JwtPayload } from "jsonwebtoken";

// declare module "express-serve-static-core" {
//   interface Request {
//     user?: JwtPayload;
//   }
// }
// const app: express.App = express(); // Erro proposital: `App` não existe

// declare global {
//   namespace Express {
//     interface Request {
//       user?: { id: number; nome: string };
//     }
//   }
// }
