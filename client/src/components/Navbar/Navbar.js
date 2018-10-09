import React from "react";
// import { Link } from "react-router-dom";
import "./NavBar.css";
import {Navbar, Nav, NavItem, Button} from "react-bootstrap";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const NavBar = () => (

  <Navbar fluid fixedTop id="nav">
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">Vote Now!</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="/">
        Home
      </NavItem>
      <NavItem eventKey={2} href="#">
        Saved
      </NavItem>
    </Nav>

    <Navbar.Form pullRight>
    <Button bsStyle="danger">Sign In</Button>
    </Navbar.Form>

  </Navbar.Collapse>
</Navbar>
);

export default NavBar;
