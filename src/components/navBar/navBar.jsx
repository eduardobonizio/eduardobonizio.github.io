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
            {gameConfig && gameConfig.user}
            {gameConfig && gameConfig.score >= 0 && ` ${gameConfig.score}pts`}
          </NavbarText>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
