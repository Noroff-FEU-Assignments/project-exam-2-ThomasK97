import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import AuthContext from "../context/AuthContext";
import logo from "../media/logo2.png";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useContext } from "react";

function NavbarComp() {
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    navigate("/");
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            {" "}
            <a href="/">
              <img src={logo} />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/hotels">Booking</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>

              {auth ? (
                <>
                  <Nav.Link href="/admin">Admin</Nav.Link>
                  <button className="btn-logout" onClick={logout}>
                    Log out
                  </button>
                </>
              ) : (
                <Nav.Link href="/login">Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
