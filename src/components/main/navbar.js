import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { BsHouseFill, BsCalendarCheckFill, } from "react-icons/bs"
import { GiTicTacToe } from "react-icons/gi"
import logo from "../logo.png"

const NavbarElement = () => {
  return (
    <Navbar expand="md" className=" mb-5 border-bottom border-success">
      <Container fluid>
        <Navbar.Brand>
        <Link to="/">
          <img style={{maxHeight : "70px"}} src={logo} alt="logo"/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle className="border border-bottom border-success"  aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav >
            <Nav.Link>
              <Link to="/">
                <Button variant="outline-success fs-4"> <BsHouseFill /> Home</Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/tictac">
                <Button variant="outline-success fs-4"> <GiTicTacToe /> Kółko-Krzyżyk</Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/unusual_day">
                <Button variant="outline-success fs-4"> <BsCalendarCheckFill /> Dzień nietypowy</Button>
              </Link>
            </Nav.Link>
          </Nav>


        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}
export default NavbarElement;