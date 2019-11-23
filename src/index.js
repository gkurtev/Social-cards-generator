import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { checkPropTypes } from "prop-types";

const styles = {
  maxWidth: 1200,
  margin: "0 auto",
  paddingTop: 100
};

function App() {
  return (
    <div className="App" style={styles}>
      <h1>Social Card Generator</h1>
      <SocialCardGenerator />
    </div>
  );
}

class SocialCardGenerator extends React.Component {
  state = {
    title: "",
    description: "",
    isSubmitted: false,
    arr: []
  };

  handleTitle = event => {
    const value = event.target.value;
    this.setState({
      title: value
    });
  };

  handleDescription = event => {
    const value = event.target.value;
    this.setState({
      description: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.title !== "" && this.state.description !== "") {
      const test = {
        title: this.state.title,
        description: this.state.description
      };
      console.log(test);

      this.setState({
        arr: [...this.state.arr, test],
        title: "",
        description: "",
        isSubmitted: true
      });
    }
  };

  render() {
    const { arr, isSubmitted, title, description } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <p>Title</p>

            <input type="text" value={title} onChange={this.handleTitle} />
          </div>
          <div>
            <p>Description</p>

            <textarea
              value={description}
              onChange={this.handleDescription}
              rows="5"
            />
          </div>

          <button type="submit">Add Card</button>
        </form>

        {isSubmitted && (
          <div
            className="cards"
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "-10px -10px"
            }}
          >
            {arr.map((item, index) => (
              <SocialCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

const SocialCard = props => {
  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__head">
          <h2>{props.title}</h2>
        </div>

        <div className="card__body">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
