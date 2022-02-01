/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink as RRNavLink, Redirect } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

import app from '../../api/Firebase';

function NavBar() {
  const globalUser = useSelector(state => state.globalUser);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="sm" className="mb-2">
      <div className="container">
        <NavbarBrand tag={RRNavLink} to="/">
          Home
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                onClick={() => isOpen && toggle()}
                tag={RRNavLink}
                to="/game"
              >
                Quizz
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={() => isOpen && toggle()}
                tag={RRNavLink}
                to="/30-dias-css"
              >
                Desafio CSS
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Guias
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem
                  onClick={() => isOpen && toggle()}
                  tag={RRNavLink}
                  to="/github-pages-react"
                >
                  Github pages com react
                </DropdownItem>
                {/* <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {globalUser && (
            <div>
              <NavbarText>
                <div>{globalUser.displayName}</div>
              </NavbarText>
              <img
                src={globalUser.photoURL}
                alt="User"
                className="ml-3"
                style={{ height: '38px', borderRadius: '50%' }}
              />
              <button
                type="button"
                onClick={() => {
                  app.auth().signOut();
                }}
              >
                Logout
              </button>
            </div>
          )}
        </Collapse>
      </div>
    </Navbar>
  );
}

export default NavBar;
