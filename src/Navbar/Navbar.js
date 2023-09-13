import React from "react";
import { Navbar, Nav, NavDropdown, } from "react-bootstrap";
import './nav.css'

export default () => {
  return (<>
    <Navbar bg="dark" fixed="top" variant="dark" expand="lg" className="text-white">
      <div className="container">
        <a href="/">
          <Navbar.Brand >
            <img
              src="../picture/newlogo.png"
              width="120"
              height="40"
              className="d-inline-block align-top"
              alt="JNRS"
            />
          </Navbar.Brand></a>
        <Navbar.Toggle aria-controls="basic-navbar-nav ml-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <a href="/" className="nav-link">HOME</a>
            <NavDropdown title="SERVICE" id="basic-nav-dropdown" className="navs">
              <a href="leasing-hotels-and-resorts" className="nav-dropdown" >
                Leasing Hotel & Resorts
              </a>
              <NavDropdown.Divider style={{ backgroundColor: '#fff' }} />
              <a href="hotel-booking" className="nav-dropdown">
                Hotel Room Booking Service
              </a>
              <NavDropdown.Divider style={{ backgroundColor: '#fff' }} />
              <a href="corporate-tours-and-events" className="nav-dropdown">
                Corporate Tours and Events
              </a>
              <NavDropdown.Divider style={{ backgroundColor: '#fff' }} />
              <a href="adventure" className="nav-dropdown" >
                International & Domestic Tour Packages
              </a>
              <NavDropdown.Divider style={{ backgroundColor: '#fff' }} />
              <a href="tranportation" className="nav-dropdown" >
                Transportation Service</a>
              <NavDropdown.Divider style={{ backgroundColor: '#fff' }} />
              <a href="events" className="nav-dropdown">
                Event Management Service
              </a>
            </NavDropdown>

            <a href="destination" className="nav-link">DESTINATION</a>
            <a href="hotels" className="nav-link">HOTELS</a>
            <a href="about" className="nav-link">ABOUT</a>
            <a href="promotion" className="nav-link">PROMOTION</a>

          </Nav>

        </Navbar.Collapse>
      </div>
    </Navbar>
    <br></br>
    <br></br>

  </>);
};



