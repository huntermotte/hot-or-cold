const mongoose = require('mongoose');

const guessSchema = new mongoose.Schema({
  fewestGuesses: Number
})

const Guesses = mongoose.model('Guesses', guessSchema);

module.exports = {Guesses};
