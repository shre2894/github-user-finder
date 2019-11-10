import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Navbar from "./layout/Navbar";
import Users from "./users/Users";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
