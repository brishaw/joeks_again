
import React, { Component } from 'react';
import axios from 'axios';

console.log('at test js...');

class Riddles extends Component {
  state = {
    question: '',
    answer: ''
  }
  
  componentDidMount() {
    axios.get('/api/riddles/')
      .then(response => {
        //console.log(response.data.jokes);
        let q = [0, 3, 6, 9, 12];
        let i = q[Math.floor(Math.random() * q.length)];
        let j = i + 1;
        //console.log(j);
        this.setState({
          question: response.data.jokes[i].title,
          answer: response.data.jokes[j].title
        })
          //console.log(i);  
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <p>Is this anything?</p>
        <p>{this.state.question}</p>
        <p>{this.state.answer}</p>
      </div>
    )
  }
}

export default Riddles;
