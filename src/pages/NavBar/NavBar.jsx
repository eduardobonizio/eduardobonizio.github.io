import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { auth } from '../../Firebase';

export default function NavBar() {
  const currentUser = useSelector(state => state.currentUser);

  return (
    <div className="container">
      <header>
        <nav>
          <NavLink to="/" activeClassName="selected">
            Home
          </NavLink>
          <NavLink to="/game" activeClassName="selected">
            Quizz
          </NavLink>
          <NavLink to="/projetos" activeClassName="selected">
            Projetos
          </NavLink>
        </nav>
        {!currentUser ? (
          <NavLink to="/login" activeClassName="selected">
            Login
          </NavLink>
        ) : (
          <>
            {currentUser.displayName}
            <img src={currentUser.photoURL} alt="User" />
            <button
              type="button"
              onClick={() => {
                auth.signOut();
              }}
            >
              Logout yes
            </button>
          </>
        )}
      </header>
    </div>
  );
}
