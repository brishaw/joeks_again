import React, { Component } from "react";
// import { Link } from "react-router-dom";

import API from "../utils/API";

class Detail extends Component {
  state = {
    newjoke: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getJoke(this.props.match.params.id)
      .then(res => this.setState({ newjoke: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <p>This is the Detail.js page.</p>
      </div>
    );
  }
}

export default Detail;
