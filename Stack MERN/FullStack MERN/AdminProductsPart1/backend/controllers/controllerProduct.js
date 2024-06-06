const Producto = require("../models/modelProduct.js");

const addProduct = async (req, res) => {
  const { title, price, description } = req.body;

  const producto = await Producto.findOne({ title });
  if (producto)
    return res.status(406).json({ message: `El productos ${title} ya existe` });

  Producto.create({ title, price, description })
    .then((productoCreado) => res.status(201).json(productoCreado))
    .catch((err) => res.status(500).json(err));
};

const verProductos = (req, res) => {
  Producto.find()
    .then((productos) => res.status(200).json(productos))
    .catch((err) => res.status(500).json(err));
};

const verUnProducto = async (req, res) => {
  const { title } = req.params;

  const producto = await Producto.findOne({ title });
  if (!producto)
    return res.status(404).json({ message: `El productos ${title} NO existe` });

  return res.status(200).json(producto);
};

module.exports = {
  addProduct,
  verProductos,
  verUnProducto
};
