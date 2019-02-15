const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const jokeController = express.Router();

console.log('joke controller is running...');

jokeController.route('/test')
  .get((req, res) => {
    console.log('GET attmept made to /api/test');
    res.json({
      message: 'SUCCESS TO ROUTE!'
    });
  })

  jokeController.route('/dadjokes')
    .get((req, res) => {
      axios.get('https://icanhazdadjoke.com/', { 
        headers: {
        'Accept': 'application/json'
        }
      })
        .then((response) => {
          console.log(response.data.joke);
          res.json({
            joke: response.data.joke
          }); 
        })
        .catch((error) => {
          console.log('Something is wrong with the GET request...');
          console.log(error);
        });
    })

jokeController.route('/chuckjokes')
  .get((req, res) => {
    axios.get('https://api.icndb.com/jokes/random')
      .then((response) => {
        console.log(response.data.value.joke);
        res.json({
          joke: response.data.value.joke
        });
      })
      .catch((error) => {
        console.log('Something is wrong with the GET request...');
        console.log(error);
      })
  })

  // jokeController.route('/funnyjoke')
  //   .get((req, res) => {
  //     let i = Math.floor((Math.random() * 35) + 1);
  //     axios.get('http://www.laughfactory.com/jokes/clean-jokes/' + i + '/')
  //       .then((response) => {
  //         var $ = cheerio.load(response.data);
  //         var results = [];
  //         $("div.joke-text p").each(function (i, element) {
  //           var title =$(element).text();

  //           results.push({
  //             title: title
  //           });
  //         })
  //         console.log(results);
  //         //return results;
  //         res.json({
  //           jokes: results
  //         })

  //       })
  //      .catch ((error) => {
  //       console.log('Something is wrong with the GET request...');
  //       console.log(error);
  //     })
  //   })

jokeController.route('/riddles')
  .get((req, res) => {
    let i = Math.floor((Math.random() * 47) + 1);
    axios.get('https://goodriddlesnow.com/riddles/by/funny-riddles/page:' + i + '/')
      .then((response) => {
        var $ = cheerio.load(response.data);
        var results = [];
        $("div.riddle-question p, div.riddle-answer p").each(function (i, element) {
          var title = $(element).text();

          results.push({
            title: title
          });
        })
        console.log(results);
        //return results;
        res.json({
          jokes: results
        })

      })
      .catch((error) => {
        console.log('Something is wrong with the GET request...');
        console.log(error);
      })
  })

  module.exports = jokeController;