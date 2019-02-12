const express = require('express');
const app = express();
const jokeController = require('./routes/jokes');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', jokeController);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));