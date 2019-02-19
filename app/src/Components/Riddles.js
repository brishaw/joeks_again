
import React, { Component } from 'react';
import axios from 'axios';
import './Styles/Riddles.css';

console.log('at test js...');

class Riddles extends Component {
  state = {
    question: '',
    answer: ''
  }
  
  componentDidMount() {
    axios.get('/api/riddles/')
      .then(response => {
        let q = [0, 3, 6, 9, 12];
        let i = q[Math.floor(Math.random() * q.length)];
        let j = i + 1;
        this.setState({
          question: response.data.jokes[i].title,
          answer: response.data.jokes[j].title
        })
      })
      .catch(error => console.log(error));
  }

  handleClick = (e) => {
    e.preventDefault();
    axios.get('/api/riddles/')
      .then(response => {
        let q = [0, 3, 6, 9, 12];
        let i = q[Math.floor(Math.random() * q.length)];
        let j = i + 1;
        this.setState({
          question: response.data.jokes[i].title,
          answer: response.data.jokes[j].title
        })
      })
      .catch(error => console.log(error));
      document.getElementById("riddleAnswer").style.visibility = "hidden";
  }

  showAnswer = (e) => {
    e.preventDefault();
    console.log("clicked");
    document.getElementById("riddleAnswer").style.visibility = "visible";
  }

  

  render() {
    return (
      <div className="right box">
        <h3>A Riddle</h3>
        <p>{this.state.question}</p>
        <button className="joke-btn reveal" onClick={this.showAnswer}></button>
        <p id="riddleAnswer" className="riddle-answer">{this.state.answer}</p>
        <button className="joke-btn" onClick={this.handleClick} />
      </div>
    )
  }
}

export default Riddles;
