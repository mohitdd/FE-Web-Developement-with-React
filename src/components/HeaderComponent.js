import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  NavItem,
  Nav,
  Collapse,
  NavbarToggler
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false
    };
  }
  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar dark right expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                alt="logo image"
                height="30"
                width="41"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} className="mr-2" />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink to="/home" className="nav-link">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/aboutus" className="nav-link">
                    <span className="fa fa-info fa-lg"></span> Aboutus
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/menu" className="nav-link">
                    <span className="fa fa-list fa-lg"></span> Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/contactus" className="nav-link">
                    <span className="fa fa-address-card fa-lg"></span> Contactus
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante Con Fusion</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Header;
