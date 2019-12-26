import React, { Component } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Route, Switch, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    console.log("MAIN CONSTRUCTOR");
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  componentDidMount() {
    console.log("COmponent did mount for MAIN");
  }

  render() {
    const HomePage = () => {
      return <Home></Home>;
    };
    console.log("Render method invoked for the main menu");
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home"></Redirect>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
