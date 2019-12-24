import React, { Component } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

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

  OnDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    console.log("Render method invoked for the main menu");
    return (
      <div>
        <Header></Header>
        <div className="container">
          <Menu
            dishes={this.state.dishes}
            onClick={dishId => this.OnDishSelect(dishId)}
          />
          <DishDetail
            dishSelect={
              this.state.dishes.filter(
                dish => dish.id === this.state.selectedDish
              )[0]
            }
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
