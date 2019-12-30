import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  BreadcrumbItem,
  Breadcrumb
} from "reactstrap";
import { Link } from "react-router-dom";

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
  console.log("Dishdetail component render is invoked" + props.comments);
  if (props.dishSelect != null) {
    return (
      <div className="container">
        <div className="row m-1">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dishSelect.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dishSelect.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dishSelect}></RenderDish>
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments}></RenderComments>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default DishDetail;
