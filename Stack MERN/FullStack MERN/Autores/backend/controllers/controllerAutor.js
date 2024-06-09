const Autor = require("../models/modeloAutor.js");

const agregarAutor = async (req, res) => {
  const { nombre } = req.body;

  if (!nombre) return res.status(406).json({ message: "Ingresa el nombre" });

  Autor.create({ nombre })
    .then((autorCreado) => res.status(201).json(autorCreado))
    .catch((err) => res.status(500).json(err));
};

const verAutores = (req, res) => {
  Autor.find()
    .then((autores) => res.status(200).json(autores))
    .catch((err) => res.status(500).json(err));
};

const eliminarAutor = (req, res) => {
  const { nombre } = req.params;

  Autor.deleteOne({ nombre })
    .then(() => res.status(200).end())
    .catch((err) => res.status(500).json(err));
};

const actualizarAutor = (req, res) => {
  const { nombreActual } = req.params;
  const { nombreNew } = req.body;

  if (!nombreNew) return res.status(406).json({ message: "Ingresa el nombre" });

  Autor.updateOne({ nombre: nombreActual }, { nombre: nombreNew }, { new: true, runValidators: true })
    .then((autorActualizado) => res.status(200).json(autorActualizado))
    .catch((err) => res.status(500).json(err));
};

module.exports = {
  agregarAutor,
  verAutores,
  eliminarAutor,
  actualizarAutor
};
