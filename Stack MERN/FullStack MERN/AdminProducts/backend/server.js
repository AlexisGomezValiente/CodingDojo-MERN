const express = require("express");
const cors = require("cors");
const app = express();
const RouteProduct = require("./routes/routeProduct.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("./config/conexion.js");

RouteProduct(app);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listen port: ${PORT}`);
});
