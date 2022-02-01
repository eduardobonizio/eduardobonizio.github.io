import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavItem, NavLink, NavbarText } from 'reactstrap';

import app from '../../api/Firebase';

function NavBar() {
  const globalUser = useSelector(state => state.globalUser);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container d-flex">
      <div>Home</div>
      <div className="container d-flex">
        <NavLink onClick={() => isOpen && toggle()} tag={RRNavLink} to="/game">
          Quizz
        </NavLink>
        <NavItem>
          <NavLink
            onClick={() => isOpen && toggle()}
            tag={RRNavLink}
            to="/30-dias-css"
          >
            Desafio CSS
          </NavLink>
        </NavItem>
        <NavItem
          onClick={() => isOpen && toggle()}
          tag={RRNavLink}
          to="/github-pages-react"
        >
          Github pages com react
        </NavItem>
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
    </div>
  );
}

export default NavBar;
