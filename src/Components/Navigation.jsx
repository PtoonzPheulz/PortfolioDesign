import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Navigation() {
  const location = useLocation()
  console.log(location?.pathname)
  return (
    <div className='pt-4'>
         <Navbar bg="" expand="lg" className='mb-3' >
      <Container  >
        <Navbar.Brand href="#home"><h4 className='text-1'>I am Opeyemi</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to='/' className={`mx-lg-4 nav-link ${location?.pathname===("/" )&& 'navselect'}`} href="#home">Work</Link>
            <Link className={`mx-lg-4 nav-link ${location?.pathname.includes("/about" )&& 'navselect'}`} to="/about">About</Link>
            <HashLink
  to="/#resume"
 className='nav-link'
  activeStyle={{ color: 'red' }}
  // etc...
>Resume</HashLink>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div  className='container'>
    <h5>UI/UX DESIGNER</h5>
    </div>
    </div>
  )
}

export default Navigation