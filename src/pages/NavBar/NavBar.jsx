/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink as RRNavLink } from 'react-router-dom';
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

const NavBar = () => {
  const gameConfig = useSelector(state => state.gameConfig);
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
              <DropdownMenu right>
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
          <NavbarText>
            <div onClick={() => app.auth().signOut()}>
              {gameConfig && gameConfig.user}
              {gameConfig && gameConfig.score >= 0 && ` ${gameConfig.score}pts`}
            </div>
          </NavbarText>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
