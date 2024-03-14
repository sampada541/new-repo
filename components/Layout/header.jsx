import React from "react";
import { Button, Container, Form, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
//import { useAuth } from "../../context/auth";
import "../../styles/header.css";

function NavScrollExample() {
  // const [auth] = useAuth(); // Get auth state from the context

  // const renderNavbarItems = () => {
  //   if (auth && auth.role === 0) {
  //     // Patient
  //     return (
  //       <>
  //         <Nav.Link href="/schedule-appointment">Schedule Appointment</Nav.Link>
  //         <Nav.Link href="/predict-disease">Predict Disease</Nav.Link>
  //         <Nav.Link href="/logout">Logout</Nav.Link>
  //       </>
  //     );
  //   } else if (auth && auth.role === 1) {
  //     // Doctor
  //     return (
  //       <>
  //         <Nav.Link href="/view-appointments">View Appointments</Nav.Link>
  //         <Nav.Link href="/logout">Logout</Nav.Link>
  //       </>
  //     );
  //   } else {
  //     // Not logged in
  return (
    <Navbar expand="lg" variant="dark" style={{  padding: "5px ", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Container fluid>
        <Navbar.Brand>
          <NavLink to="/">
            <img src="images/logo.png" alt="Logo" className="custom-logo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 align-items-center" style={{ maxHeight: "10px" }} navbarScroll>
            <Nav.Link href="/">Home</Nav.Link>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ border: "none", borderRadius: "0", maxWidth: "100%", display: "flex" }}
              />
              <Button variant="primary" style={{ borderRadius: "0", minWidth: "80px", display:"flex"}}>Search</Button>
            </div>
            {/* {renderNavbarItems()} */}
            <NavDropdown title="Register" id="navbarScrollingDropdown" style={{ color: "black" }}>
              <NavDropdown.Item href="/patient-register">Register as Patient</NavDropdown.Item>
              <NavDropdown.Item href="/doctor-register">Register as Doctor</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login" >Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
