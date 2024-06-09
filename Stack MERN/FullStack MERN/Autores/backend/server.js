const express = require("express");
const cors = require("cors");
const RouteAutor = require("./routes/routesAutor.js");
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/conexion.js");

RouteAutor(app);

app.listen(PORT, () => {
  console.log(`Server listen port: ${PORT}`);
});
