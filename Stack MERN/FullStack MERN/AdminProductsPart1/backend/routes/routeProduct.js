const { addProduct } = require("../controllers/controllerProduct.js");

const RouteProduct = (app) => {
  app.post("/api/producto/agregar", addProduct);
};

module.exports = RouteProduct;
