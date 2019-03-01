import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Jokes from './Jokes';
import Detail from './Detail';
import './Styles/Dashboard.css';

class Dashboard extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Router>
      <div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <Switch>
            <Route exact path="/" component={Jokes} />
            <Route exact path="/books" component={Jokes} />
            <Route exact path="/books/:id" component={Detail} />
          </Switch>
        </Modal>
        <button className="modal-open" type="button" onClick={this.showModal}>
          Submit your joke!
        </button>
      </div>
      </Router>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p className="be-nice">Submit your own funny joke, not ones that are hurtful or mean. I do filter - and mean jokes will not be published.</p>
        {children}
        <button className="modal-close" onClick={handleClose}>X</button>
      </section>
    </div>
  )
}

const container = document.createElement("div");
document.body.appendChild(container);
//ReactDOM.render(<Dashboard />, container);

export default Dashboard; 