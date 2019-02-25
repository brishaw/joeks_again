import axios from "axios";

export default {
  // Gets all books
  getJokes: function () {
    return axios.get("/api/jokes");
  },
  // Gets the book with the given id
  getJoke: function (id) {
    return axios.get("/api/jokes/" + id);
  },
  // Deletes the book with the given id
  deleteJoke: function (id) {
    return axios.delete("/api/jokes/" + id);
  },
  // Saves a book to the database
  saveJoke: function (jokeData) {
    return axios.post("/api/jokes", jokeData);
    
  }
};
