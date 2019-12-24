import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
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

function RenderComments({ comments }) {
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

function DishDetail(props) {
  console.log("Dishdetail component render is invoked");
  if (props.dishSelect != null) {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dishSelect}></RenderDish>
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.dishSelect.comments}></RenderComments>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default DishDetail;
