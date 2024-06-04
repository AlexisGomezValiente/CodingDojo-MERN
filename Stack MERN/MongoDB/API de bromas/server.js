const express = require("express");
const RoutesJokes = require("./routes/routesJokes.js");
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/conexion.js");

RoutesJokes(app);

app.listen(PORT, () => {
  console.log(`Server listen port: ${PORT}`);
});
