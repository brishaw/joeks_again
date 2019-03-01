import React, { Component } from 'react';
import './Styles/Footer.css';
import Dashboard from './Dashboard';
import Submitted from './Submitted';

class Footer extends Component {

  render() {
    return (
      <footer className="footer">
        <Dashboard />
        <Submitted />
        <div className="container">Brian Shaw 2019</div>
      </footer>
    )
  }
}

export default Footer;