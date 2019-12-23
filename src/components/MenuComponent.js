import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardImgOverlay } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    console.log("Menu Component constructor is invoked");
  }

  componentDidMount() {
    console.log("Component did Mount is invoked for MenuComponent");
  }

  render() {
    console.log("render method invoked for Menu");
    const menu = this.props.dishes.map(dish => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.props.onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />

            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div>
        <div className="row">{menu}</div>
      </div>
    );
  }
}

export default Menu;
