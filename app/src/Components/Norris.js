import React, { Component } from 'react';
import axios from 'axios';

class Norris extends Component {
  state = {
    question: '',
    answer: ''
  }

  componentDidMount() {
    axios.get('/api/chuckjoke/')
    .then(response => {
      console.log(response.data.joke);
      this.setState({
        question: response.data.joke
      })
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <p>Chuck Norris Jokes</p>
        <p>{this.state.question}</p>
      </div>
    )
  }
}

export default Norris;