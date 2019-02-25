const mongoose = require("mongoose");
const db = require("../models");
console.log("AT THE SCRIPT");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jokesdb");

const jokeSeed = [
  {
    newjoke: "I am a really funny joke!"
  },
  {
    newjoke: "No no no, I am the really funny joke!"
  }
];

db.Submitted
  .remove({})
  .then(() => db.Submitted.collection.insertMany(jokeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });