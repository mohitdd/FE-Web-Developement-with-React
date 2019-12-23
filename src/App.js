import React, { Component } from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";
import Main from "./components/MainComponent";

class App extends Component {
  render() {
    return <Main></Main>;
  }
}

export default App;
