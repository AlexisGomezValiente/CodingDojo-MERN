const {
  agregarAutor,
  verAutores,
  eliminarAutor,
  actualizarAutor,
} = require("../controllers/controllerAutor.js");

const RouteAutor = (app) => {
  app.post("/api/autor/agregar", agregarAutor);
  app.get("/api/autores", verAutores);
  app.delete("/api/autor/eliminar/:nombre", eliminarAutor);
  app.put("/api/autor/actualizar/:nombreActual", actualizarAutor);
};

module.exports = RouteAutor;
