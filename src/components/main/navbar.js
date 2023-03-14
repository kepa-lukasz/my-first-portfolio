import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { BsHouseFill, BsCalendarCheckFill, } from "react-icons/bs"
import { BsEmojiLaughingFill } from "react-icons/bs"
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
              <Link to="/" className="text-decoration-none">
                <Button variant="outline-success fs-4 d-flex align-items-center "> <BsHouseFill />&nbsp;Home</Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/games" className="text-decoration-none">
                <Button variant="outline-success fs-4 d-flex align-items-center "> <BsEmojiLaughingFill/> &nbsp;Mini gry</Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/unusual_day" className="text-decoration-none">
                <Button variant="outline-success fs-4 d-flex align-items-center "> <BsCalendarCheckFill /> &nbsp;Dzień nietypowy</Button>
              </Link>
            </Nav.Link>
          </Nav>


        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}
export default NavbarElement;