import dotenv from "dotenv";
import express from "express";
import roteadorUsuario from "./routes/usuario.js";
dotenv.config();

const router = express();
const port = 3000;

router.use(express.json());
router.use(roteadorUsuario);

router.get("/", (req, res) => {
  res.json({
    message: "API para CRUD usuario: link_gitgub",
  });
});

router.listen(port, () => {
  // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});