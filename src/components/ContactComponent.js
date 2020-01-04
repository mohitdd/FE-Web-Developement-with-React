import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  FormFeedback
} from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      message: "",
      agree: false,
      contactType: "Tel.",
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false
      }
    };
  }

  handleBlur = field => evt => {
    console.log("On Blur is called for " + field);
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  validation = (firstname, lastname, telnum, email) => {
    const errors = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: ""
    };

    if (this.state.touched.firstname && firstname.length < 3) {
      errors.firstname = "firstname length should be >= 3 chracters";
    } else if (this.state.touched.firstname && firstname.length > 10) {
      errors.firstname = "firstname should not be greater than 10 chracters";
    }

    if (this.state.touched.lastname && lastname.length < 3) {
      errors.lastname = "lastname length should be >= 3 charaters";
    } else if (this.state.touched.lastname && lastname.length > 10) {
      errors.lastname = "lastname should not be greater than 10 chracters";
    }

    var reg = /^\d+$/;
    if (this.state.touched.telnum && !reg.test(telnum)) {
      errors.telnum = "Tel. num should only contain numbers";
    }

    if (this.state.touched.email && email.split("").filter(x => x === "@")) {
      errors.email = "Email should contain @ sign";
    }

    console.log("The errors I am returning is: " + JSON.stringify(errors));
    return errors;
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log("retrived name is :" + target.name);

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    console.log("Current state is :" + JSON.stringify(this.state));
    event.preventDefault();
  };

  render() {
    console.log("Form is getting re-rendered");
    const errors = this.validation(
      this.state.firstname,
      this.state.lastname,
      this.state.telnum,
      this.state.email
    );

    return (
      <div className="container">
        <div className="row m-1">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send us your feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form
              onSubmit={this.handleSubmit}
              onChange={this.handleInputChange}
            >
              <FormGroup row>
                <Label htmlFor="firstname" md={2}>
                  FirstName
                </Label>
                <Col md={10}>
                  <Input
                    valid={errors.firstname === ""}
                    invalid={errors.firstname != ""}
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                    value={this.state.firstname}
                    onBlur={this.handleBlur("firstname")}
                  ></Input>
                  <FormFeedback>{errors.firstname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastname" md={2}>
                  LastName
                </Label>
                <Col md={10}>
                  <Input
                    valid={errors.lastname === ""}
                    invalid={errors.lastname != ""}
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                    value={this.state.lastname}
                    onBlur={this.handleBlur("lastname")}
                  ></Input>
                  <FormFeedback>{errors.lastname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="telnum" md={2}>
                  Contact Tel.
                </Label>
                <Col md={10}>
                  <Input
                    valid={errors.telnum === ""}
                    invalid={errors.telnum != ""}
                    type="tel"
                    name="telnum"
                    id="telnum"
                    placeholder="Tel. Number"
                    value={this.state.telnum}
                    onBlur={this.handleBlur("telnum")}
                  ></Input>
                  <FormFeedback>{errors.telnum}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    valid={errors.email === ""}
                    invalid={errors.email != ""}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={this.state.email}
                    onBlur={this.handleBlur("email")}
                  ></Input>
                  <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="agree"
                        checked={this.state.agree}
                      ></Input>
                      <strong> May We Contact you</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type="select"
                    name="contactType"
                    value={this.state.contactType}
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    name="message"
                    id="message"
                    placeholder="Type Your message"
                    row="12"
                    value={this.state.message}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
