import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  BreadcrumbItem,
  Breadcrumb,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label
} from "reactstrap";
import { Link } from "react-router-dom";
import { LocalForm, Control, Errors } from "react-redux-form";

const required = val => val && val.length;
const minimumLength = len => val => val && val.length >= len;
const maximumLength = len => val => !val || val.length <= len;

export class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  handleSubmit = values => {
    this.toggleModal();
    //alert("values passed is:" + JSON.stringify(this.props.dishId));
    this.props.addComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
  };

  render() {
    return (
      <React.Fragment>
        <Button outline color="secondary" onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-lg mr-1" />
          Submit Comment
        </Button>
        <Modal toggle={this.toggleModal} isOpen={this.state.isModalOpen}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>

          <ModalBody>
            <LocalForm onSubmit={values => this.handleSubmit(values)}>
              <div className="form-group">
                <Label htmlFor="rating">Rating</Label>
                <Control.select
                  model=".rating"
                  id="rating"
                  name="rating"
                  className="form-control"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Control.select>
              </div>
              <div className="form-group">
                <Label htmlFor="author">Your Name</Label>
                <Control.text
                  model=".author"
                  name="author"
                  id="author"
                  className="form-control"
                  placeholder="Your Name"
                  validators={{
                    required,
                    minimumLength: minimumLength(3),
                    maximumLength: maximumLength(15)
                  }}
                ></Control.text>
                <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    required: "Required",
                    minimumLength: "Must be greater than 2 charcters",
                    maximumLength: "Must be 15 chracters or less"
                  }}
                ></Errors>
              </div>
              <div className="form-group">
                <Label htmlFor="comment">Comment</Label>
                <Control.textarea
                  model=".comment"
                  id="comment"
                  name="comment"
                  className="form-control"
                  rows="6"
                  validators={{
                    required,
                    minimumLength: minimumLength(3),
                    maximumLength: maximumLength(15)
                  }}
                ></Control.textarea>
              </div>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

function RenderDish({ dish }) {
  console.log("The dish to be rendered is :" + dish.id);
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

function RenderComments({ comments, addComment, dishId }) {
  if (comments != null) {
    console.log(
      "The comments passed are" + JSON.stringify(comments[comments.length - 1])
    );
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
        <CommentForm dishId={dishId} addComment={addComment}></CommentForm>
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
            <RenderComments
              comments={props.comments}
              addComment={props.addComment}
              dishId={props.dishSelect.id}
            ></RenderComments>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default DishDetail;
