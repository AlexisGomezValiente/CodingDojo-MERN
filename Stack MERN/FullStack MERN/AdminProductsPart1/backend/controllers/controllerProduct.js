const Producto = require("../models/modelProduct.js");

const addProduct = (req, res) => {
  const { title, price, description } = req.body;

  Producto.create({ title, price, description })
    .then((productoCreado) => res.status(201).json(productoCreado))
    .catch((err) => res.status(500).json(err));
};

module.exports = {
  addProduct,
};
