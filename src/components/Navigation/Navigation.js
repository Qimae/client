import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import edulogo from "../../assets/edulogo.png";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const history = useNavigate();
  const RouteShift = () => {
    history("/choice");
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img src={edulogo} alt="edulogo" height="50px"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
            <Nav.Link href="#pricing">Tutorial</Nav.Link>
            <NavDropdown title="Options" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                2023 Selection
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                2022 Selection
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="d-flex">
            <Nav.Link eventKey={2} href="/login">
              Login
            </Nav.Link>
            <Button id="btn-primary" onClick={RouteShift}>
              Register
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
