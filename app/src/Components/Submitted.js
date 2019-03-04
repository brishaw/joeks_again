import React, { Component } from 'react';
import axios from 'axios';

console.log("at submitted");

class Submitted extends Component {
  state = {
    author: '',
    subJoke: '',
    subPunchline: ''
  }



  componentDidMount() {
    axios.get('/api/jokes')
      .then(response => {
        console.log(response.data);

        let i = Math.floor((Math.random() * response.data.length) + 0);
        console.log(i);
        this.setState({
          author: response.data[i].author,
          subJoke: response.data[i].newjoke
        })
      })
      .catch(error => console.log(error));
  }

  render() {

    return (

      <div className="submitted-joke">
        <h3>Submitted Joke by - {this.state.author}</h3>
        <p>{this.state.subJoke}</p>
      </div>
    )
  }
}

export default Submitted; 