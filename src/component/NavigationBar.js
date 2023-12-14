import { Navbar, Container, Nav, NavDropdown, Form, Button } from "react-bootstrap"
import {  Link } from 'react-router-dom';
import icon from "../assets/logo_hitam.png"
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const NavigationBar = () =>{
  const [token, setToken] = useState(Cookies.get('accesToken'))
  const handleLogout = () =>{
    Cookies.remove('accesToken')
    window.location.reload()
  }  
    return(  
    <div> 
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid style={{backgroundColor:'#009C86', height: '70px'}}>
        <Navbar.Brand as={Link} to='/'><img
              alt=""
              src={icon}
              width="180"
              height="80"
              margin='20px'
              className="d-inline-block align-top"
            />{' '}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-4 my-lg-0"
            style={{ maxHeight: '200px'}}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/artikel">Artikel</Nav.Link>
            {token != null &&
              <NavDropdown title="Layanan" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/layanan">Konsultasi Online</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item as={Link} to="/dokter">Konsultasi Kilat</NavDropdown.Item>
              </NavDropdown>
            }
            
          </Nav>
          {console.log(token)}
          {token == null? 
          <Button variant="outline-light" style={{margin:'10px'}} as={Link} to="/login">Login</Button>:
          <Button variant="outline-light" style={{margin:'10px'}} onClick={handleLogout}>Logout</Button>  
        }
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    );
}
export default NavigationBar;