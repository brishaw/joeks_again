const express = require('express');

const jokeController = express.Router();

console.log('joke controller is running...');

jokeController.route('/test')
  .get((req, res) => {
    console.log('GET attmept made to /api/test');
    res.json({
      message: 'SUCCESS TO ROUTE!'
    });
  })

  module.exports = jokeController;