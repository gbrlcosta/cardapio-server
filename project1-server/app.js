const express = require("express");
const rotaProduto = require("./rotas/produto");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/produtos", rotaProduto);

const port = 8000;

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});
