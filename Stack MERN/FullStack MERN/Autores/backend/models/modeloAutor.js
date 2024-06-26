const mongoose = require("mongoose");

const ColeccionAutores = mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "The name is required"],
    minlength: [3, "The name must be at least 3 characters long"],
    unique: [true,"El nombre ya se encuentra registrado"]
  },
});

const Autor = mongoose.model("autores", ColeccionAutores);

module.exports = Autor;
