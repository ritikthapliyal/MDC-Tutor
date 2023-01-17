import "./Hheader.css"
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import dclogo from "../../assets/Doubt-connect-logo.svg"

export const Hheader = () => {
  return (
    <>
      <div className="home-nav">
        <Navbar className="boot-nav" collapseOnSelect expand="lg"  variant="light">
          <Navbar.Brand className="brand-name" href="#home">
            <img src={dclogo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="boot-nav-collapse" id="responsive-navbar-nav">
            <Nav className="mr-auto boot-a-tags">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">For Tutors</Nav.Link>
              <Nav.Link href="#">DC For Schools </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};
