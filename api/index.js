const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const busboy = require('connect-busboy');
const busboyBodyParser = require('busboy-body-parser');

require('dotenv').config()

require("./database");

app.use(morgan("dev"));
app.use(express.json());
app.use(busboy());
app.use(busboyBodyParser())
app.use(cors());

app.set("port", 3001);

app.use("/salao", require("./src/routes/salao.routes"));
app.use("/servico", require("./src/routes/servico.routes"));

app.listen(app.get("port"), () => {
  console.log(`Api está rodando na porta  ${app.get("port")}`);
});
