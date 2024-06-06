const mongoose = require("mongoose");

const ColectionJokes = mongoose.Schema({
  setup: {
    type: String,
    required: true
  },
  punchline: {
    type: String,
    required: true
  },
});

const Jokes = mongoose.model("jokes", ColectionJokes);

module.exports = Jokes;