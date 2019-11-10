import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Navbar from "./layout/Layout";
import UserItem from "./users/UserItem";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
