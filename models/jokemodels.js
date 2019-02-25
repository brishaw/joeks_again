const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jokeSchema = new Schema({
  newjoke: { type: String, required: true }
});

const Submitted = mongoose.model("Submitted", jokeSchema);

module.exports = Submitted;