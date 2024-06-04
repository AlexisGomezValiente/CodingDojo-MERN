const mongoose = require("mongoose");

const ColectionJokes = mongoose.Schema({
  setup: {
    type: String,
  },
  punchline: {
    type: String,
  },
});

const Jokes = mongoose.model("jokes", ColectionJokes);

module.exports = Jokes;