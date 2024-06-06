const mongoose = require("mongoose");

const ColeccionProductos = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Producto = mongoose.model("productos", ColeccionProductos);

module.exports = Producto;
