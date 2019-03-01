const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jokeSchema = new Schema({
  author: { type: String, required: true },
  newjoke: { type: String, required: true },
  punchline: { type: String },
  date: { type: Date, default: Date.now }
});

const Submitted = mongoose.model("Submitted", jokeSchema);

module.exports = Submitted;