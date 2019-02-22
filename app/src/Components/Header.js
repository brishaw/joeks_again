import React, { Component } from 'react';
import './Styles/Header.css';

class Header extends Component {

  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="logo"><span>Recycled!</span></div>
          <div className="text">
            <p><span>T</span>his app uses React, Node, Express and is hosted on Heroku (hence the loading time...).</p>
            <p>The Chuck Norris and dad jokes are APIs and the Riddles are being scraped. You can see more of what's under the hood at the <a href="https://github.com/brishaw/joeks_again" alt="Link to the Github repo">repo</a>.</p>
            <p>Inspired by my TA, Joe Faulstick, who always brought a good one to class!</p>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;