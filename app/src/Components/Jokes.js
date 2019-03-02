import React, { Component } from "react";
// import DeleteBtn from "../Components/DeleteBtn";

import API from "../utils/API";
// import { Link } from "react-router-dom";

import { Input, TextArea, FormBtn } from "../Components/Form";
import './Styles/Jokes.css';

class Jokes extends Component {
  state = {
    jokes: [],
    author: "",
    newjoke: "",
    punchline: ""
  };

  componentDidMount() {
    this.loadJoke();
  }

  loadJoke = () => {
    API.getJoke()
      .then(res =>
        this.setState({ jokes: res.data, author: "", newjoke: "", punchline: "" })
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
    if (this.state.author && this.state.newjoke) {
      API.saveJoke({
        author: this.state.author,
        newjoke: this.state.newjoke,
        punchline: this.state.punchline
      })
        .then(res => this.loadJoke())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>

            <form>
              <Input 
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Your name (required)"
              />
              <TextArea
                className="joke-box"
                value={this.state.newjoke}
                onChange={this.handleInputChange}
                name="newjoke"
                placeholder="Joke (required)"
              />
              {/* <TextArea
                className="punchline-box"
                value={this.state.punchline}
                onChange={this.handleInputChange}
                name="punchline"
                placeholder="Punchline"
              /> */}
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
