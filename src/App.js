import React, { Component } from "react";
import "./App.css";
import CenteredGrid from "./components/grid/grid";
import MenuAppBar from "./components/nav/nav";
import BottomAppBar from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar />
        <CenteredGrid />
        <BottomAppBar />
      </div>
    );
  }
}

export default App;
