const Jokes = require("../models/modeloJokes.js");

const todosLosJokes = (req, res) => {
  Jokes.find()
    .then((jokes) => {
      return res.status(200).json(jokes);
    })
    .catch((err) => {
      return res.status(500).json({ message: "No se pudo obtener los datos" });
    });
};

const jokeById = (req, res) => {
  const id = req.params.id;

  Jokes.findById(id)
    .then((joke) => {
      return res.status(200).json(joke);
    })
    .catch((err) => {
      return res.status(500).json({ message: "No se encontraron los datos" });
    });
};

const jokeRandom = (req, res) => {
  Jokes.countDocuments()
    .then((count) => {
      const randomIndex = Math.floor(Math.random() * count);
      return Jokes.findOne().skip(randomIndex);
    })
    .then((joke) => {
      if (joke) {
        return res.status(200).json(joke);
      } else {
        return res.status(404).json({ message: "No se encontró el chiste" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ message: "Error interno del servidor" });
    });
};

const addJoke = (req, res) => {
  const { setup, punchline } = req.body;

  const query = { setup, punchline };

  Jokes.create(query)
    .then((jokeCreado) => {
      return res.status(201).json(jokeCreado);
    })
    .catch((err) => {
      return res.status(500).json({ message: "Error interno del servidor" });
    });
};

const updateJoke = (req, res) => {
  const id = req.params.id;
  const newSetup = req.body.setup;

  const query = { $set: { setup: newSetup } };

  Jokes.updateOne({ _id: id }, query)
    .then((jokeActualizado) => {
      return res.status(200).json(jokeActualizado);
    })
    .catch((err) => {
      return res.status(500).json({ message: "Error interno del servidor" });
    });
};

const deleteJoke = (req, res) => {
  const id = req.params.id;

  const query = { _id: id };

  Jokes.deleteOne(query)
    .then(() => {
      return res.status(200).end();
    })
    .catch((err) => {
      return res.status(500).json({ message: "Error interno del servidor" });
    });
};

module.exports = {
  todosLosJokes,
  jokeById,
  jokeRandom,
  addJoke,
  updateJoke,
  deleteJoke
};
