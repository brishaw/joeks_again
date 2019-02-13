import React, { Component } from 'react';
import Riddles from './Components/Riddles';
import Dad from './Components/Dad';
import Norris from './Components/Norris';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Riddles />
      <Dad />
      <Norris />
      </div>
    );
  }
}

export default App;
