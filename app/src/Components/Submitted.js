import React, { Component } from 'react';
import axios from 'axios';

console.log("at submitted");

class Submitted extends Component {
  state = {
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
          subJoke: response.data[i].newjoke
        })
      })
      .catch(error => console.log(error));
  }

  render() {

    return (

      <div>
        <p>Random User Submitted Joke!</p>
        <p>{this.state.subJoke}</p>
      </div>
    )
  }
}

export default Submitted; 