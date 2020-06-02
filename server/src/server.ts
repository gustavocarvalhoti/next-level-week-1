import express from 'express';
import routes from "./routes";
import path from "path";
import cors from "cors";

const port = 3333;
const app = express();

// Para entender o body json
app.use(express.json());

// Para utilizar as rotas
app.use(routes);

// Expor as rotas
app.use(cors());

// Prover arquivos estáticos, imagem, pdf e etc, de uma pasta
// Para acessar o arquivo na URL: http://localhost:3333/uploads/oleo.svg
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

console.log(`Running on the port ${port}`);
app.listen(port);
