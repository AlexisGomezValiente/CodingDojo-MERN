const {
  addProduct,
  verProductos,
  verUnProducto,
  actualizarProducto,
  eliminarProducto
} = require("../controllers/controllerProduct.js");

const RouteProduct = (app) => {
  app.post("/api/producto/agregar", addProduct);
  app.get("/api/productos", verProductos);
  app.get("/api/productos/:title", verUnProducto);
  app.put('/api/productos/actualizar/:title', actualizarProducto);
  app.delete('/api/productos/eliminar/:title', eliminarProducto)
};

module.exports = RouteProduct;
