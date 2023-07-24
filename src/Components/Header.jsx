import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
const Header= () => {
   
  return (
    <>
  
    <Navbar expand="lg"  style={{background:"#2a9d8f"}}fixed="top">
        <Container>
      <Link to='/' style={{textDecoration:"none"}}><Navbar.Brand to="/">Home</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="ReactJs" id="ReactJs-dropdown">
         <Nav.Link as={Link} to="/reactinterview" style={{}} >Interview questions</Nav.Link> 
          </NavDropdown>
          <NavDropdown title="Java" id="Java-dropdown">
          <Nav.Link as={Link} to="/javainterview" style={{}} >Interview questions</Nav.Link>
          </NavDropdown>
          <NavDropdown title="SpringBoot" id="springboot-dropdown">
          <Nav.Link as={Link} to="/springinterview" style={{}} >Interview questions</Nav.Link>
          </NavDropdown>
          <NavDropdown title="C++" id="C++-dropdown">
          <Nav.Link as={Link} to="/c++interview" style={{}} >Interview questions</Nav.Link>
          </NavDropdown>
          <NavDropdown title="Python" id="python-dropdown">
          <Nav.Link as={Link} to="/pyinterview" style={{}}>Interview questions</Nav.Link>
          </NavDropdown> 
          <NavDropdown title="Laravel" id="Laravel-dropdown">
          <Nav.Link as={Link} to="/larainterview" style={{}}>Interview questions</Nav.Link>
          </NavDropdown>
          <Nav.Link as={Link} to="/certificate" style={{ textDecoration: "none" }}>Online Certification</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;
