import React, { Component } from 'react';
import './Components/Styles/App.css';
import Header from './Components/Header';
import Riddles from './Components/Riddles';
import Dad from './Components/Dad';
import Norris from './Components/Norris';
import Footer from './Components/Footer';


class App extends Component {

  render() {
    return (
      <div className="App">
          <div className="grid">
          <Header />
          <Riddles />
          <Dad />
          <Norris />   
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
