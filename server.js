const express = require('express');
const app = express();
const path = require('path');

const jokeController = require('./routes/jokes');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

app.use('/api', jokeController);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./app/public/index.html"));
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));