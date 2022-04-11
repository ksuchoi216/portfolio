import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components';

export default function Header() {
  return (
  <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Kyungsu Choi</Navbar.Brand>
        <NavWapper>
          <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              {/* <DropdownButton id="dropdown-basic-button" title="Blog">
                <Dropdown.Item href="#/action-1">Data Science</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Full Stack</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Engineering</Dropdown.Item>
              </DropdownButton> */}
          </Nav>
        </NavWapper>
      </Container>
    </Navbar>
  </>
  )
}

const NavWapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;