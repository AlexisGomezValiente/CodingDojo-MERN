const {
  todosLosJokes,
  jokeById,
  jokeRandom,
  addJoke,
  updateJoke,
  deleteJoke,
} = require("../controller/controllerJokes.js");

const RoutesJokes = (app) => {
  app.get("/api/jokes", todosLosJokes);
  app.get("/api/joke/random", jokeRandom);
  app.get("/api/jokes/:id", jokeById);

  app.post("/api/joke/new", addJoke);

  app.put("/api/joke/updated/:id", updateJoke);

  app.delete("/api/jokes/delete/:id", deleteJoke);
};

module.exports = RoutesJokes;
