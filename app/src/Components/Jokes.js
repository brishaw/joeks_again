import React, { Component } from "react";
// import DeleteBtn from "../Components/DeleteBtn";

import API from "../utils/API";
// import { Link } from "react-router-dom";

import { TextArea, FormBtn } from "../Components/Form";
import './Styles/Jokes.css';

class Jokes extends Component {
  state = {
    jokes: [],
    newjoke: ""
  };

  componentDidMount() {
    this.loadJoke();
  }

  loadJoke = () => {
    API.getJoke()
      .then(res =>
        this.setState({ jokes: res.data, newjoke: "" })
      )
      .catch(err => console.log(err));
  };

  deleteJoke = id => {
    API.deleteJoke(id)
      .then(res => this.loadJoke())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.newjoke) {
      API.saveJoke({
        newjoke: this.state.newjoke
      })
        .then(res => this.loadJoke())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>

            <form>
              <TextArea
                value={this.state.newjoke}
                onChange={this.handleInputChange}
                name="newjoke"
                placeholder="Joke (required)"
              />
              {/* <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
              <FormBtn className="joke-btn"
                disabled={!(this.state.newjoke)}
                onClick={this.handleFormSubmit}
              >
                Submit Joke!
              </FormBtn>
            </form>


            {/* {this.state.jokes.length ? (
              <div>
                {this.state.jokes.map(joke => (
                  <p key={joke._id}>
                    <Link to={"/jokes/" + joke._id}>
                      <strong>
                        {joke.newjoke}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteJoke(joke._id)} />
                  </p>
                ))}
              </div>
            ) : (
                <h3>No Results to Display</h3>
              )} */}

      </div>
    );
  }
}

export default Jokes;
