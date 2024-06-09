const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/autores_db")
  .then(() => {
    console.log("Conexion exitosa");
  })
  .catch((err) => {
    console.log(err);
  });
