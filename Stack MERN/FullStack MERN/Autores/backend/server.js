require("./config/conexion.js");

const express = require("express");
const cors = require("cors");
const RouteAutor = require("./routes/routesAutor.js");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

RouteAutor(app);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listen port: ${PORT}`);
});
