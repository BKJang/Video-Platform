import React from 'react'
import { Navbar, Nav, NavItem, Container, Grid, Alert } from 'react-bootstrap'

const Navigator = props => {
  return (
    <Navbar fixedTop className="mainHeader">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">Video-Platform</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="/" className="mainHeaderMenu">
            Home
          </NavItem>
          <NavItem eventKey={2} href="#" className="mainHeaderMenu">
            즐겨찾기
          </NavItem>
          <NavItem eventKey={3} href="/mypage" className="mainHeaderMenu">
            마이페이지
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Navigator
