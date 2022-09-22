import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Style = styled.div`
  .diff-color, .colored {
    color: #BC4749;
  }
  .ui {
    font-size: 2rem;
  }
  .navbar-expand .navbar-collapse {
    .nav-link, .navbar-text {
      font-size: 1.1rem;
    }
  }
`

function Navigation() {
  return (
    <Style>
        <div>
        <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <div className='diff-color'>I am Opeyemi</div> 
        <br/> 
        <div className='ui'>UI/UX DESIGNER</div> 
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a className='colored' href="#login"><b>Work</b></a>
          </Navbar.Text>
          <Nav.Link href="#action1" className='px-5'><b>About</b></Nav.Link>
          <Nav.Link href="#action2"><b>Resume</b></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    </Style>
  )
}

export default Navigation