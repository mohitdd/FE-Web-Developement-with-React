import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    console.log("DISHDETAIL CONSTRUCTOR");
  }

  componentDidMount() {
    console.log("Component did mount is called here in dishdetail ...");
  }

  componentDidUpdate() {
    console.log("Component did update is called here in dish detail");
  }

  renderDish(dish) {
    console.log("The dish to be rendered is :" + dish.name);
    return (
      <Card key={dish.id}>
        <CardImg top width="100%" src={dish.image} alt={dish.name}></CardImg>
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(comments) {
    if (comments != null) {
      let list = comments.map(comment => {
        return (
          <li key={comment.id}>
            <div>
              <p>{comment.comment}</p>
              <p>
                --{comment.author}, {comment.date}
              </p>
            </div>
          </li>
        );
      });
      return (
        <div>
          <h3>Comments</h3>
          <ul className="list-unstyled">{list}</ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    console.log("Dishdetail component render is invoked");
    if (this.props.dishSelect != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dishSelect)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.dishSelect.comments)}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
