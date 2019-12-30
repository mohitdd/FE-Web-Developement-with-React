import React, { Component } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import { Route, Switch, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    console.log("MAIN CONSTRUCTOR");
    this.state = {
      dishes: DISHES,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      comments: COMMENTS,
      selectedDish: null
    };
  }

  componentDidMount() {
    console.log("COmponent did mount for MAIN");
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter(dish => dish.featured)[0]}
          promotion={this.state.promotions.filter(promo => promo.featured)[0]}
          leader={this.state.leaders.filter(leader => leader.featured)[0]}
        ></Home>
      );
    };

    const DishWithId = ({ match }) => {
      console.log("The item we are going to render has dish id" + match.params);
      return (
        <DishDetail
          dishSelect={
            this.state.dishes.filter(
              dish => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            comment => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
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
          <Route path="/menu/:dishId" component={DishWithId}></Route>
          <Route path="/contactus" component={Contact}></Route>
          <Redirect to="/home"></Redirect>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
