import React, { Component } from 'react';
import axios from 'axios';

class Dad extends Component {
  state = {
    question: '',
    answer: ''
  }

  componentDidMount() {
    axios.get('/api/dadjokes')
      .then(response => {
        this.setState({
          question: response.data.joke
        })
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="middle">
        <p>The Dad Jokes</p>
        <p>{this.state.question}</p>
      </div>
    )
  }
}

export default Dad;