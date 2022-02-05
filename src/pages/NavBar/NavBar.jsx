/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import app from '../../api/Firebase';

function NavBar() {
  const globalUser = useSelector(state => state.globalUser);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-itens"
          aria-controls="navbar-itens"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbar-itens">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <a href="/game" className="nav-item">
              Quizz
            </a>
            <a href="/30-dias-css" className="nav-item">
              Desafio CSS
            </a>
            <a href="/github-pages-react" className="nav-item">
              Github pages com react
            </a>
            {globalUser && (
              <>
                <a href="/">
                  <div>{globalUser.displayName}</div>
                </a>
                <img
                  src={globalUser.photoURL}
                  alt="User"
                  className="ml-3"
                  style={{
                    maxHeight: '40px',
                    maxWidth: '40px',
                    borderRadius: '50%',
                  }}
                />
                <button
                  type="button"
                  onClick={() => {
                    app.auth().signOut();
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
