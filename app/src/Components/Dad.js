import React, { Component } from 'react';
import './Styles/Dad.css';
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

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      question: ''
    })

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
      <div className="middle box">
        <h3>The Dad Jokes</h3>
        <p>{this.state.question}</p>
        <button className="joke-btn" onClick={this.handleClick} />
      </div>
    )
  }
}

export default Dad;