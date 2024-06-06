const {
  addProduct,
  verProductos,
  verUnProducto,
} = require("../controllers/controllerProduct.js");

const RouteProduct = (app) => {
  app.post("/api/producto/agregar", addProduct);
  app.get("/api/productos", verProductos);
  app.get("/api/productos/:title", verUnProducto);
};

module.exports = RouteProduct;
