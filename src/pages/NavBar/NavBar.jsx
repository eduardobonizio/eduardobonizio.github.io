import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import app from '../../api/Firebase';

function NavBar() {
  const globalUser = useSelector(state => state.globalUser);

  return (
    <div className="navbar navbar-expand-md navbar-dark bg-dark" id="navbar">
      <div className="container py-3">
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/game" className="nav-link">
                Quizz
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/kakele" className="nav-link">
                Kakele
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            {globalUser && (
              <>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <div>{globalUser.displayName}</div>
                  </Link>
                </li>
                <li className="nav-item">
                  <img
                    src={globalUser.photoURL}
                    alt="User"
                    style={{
                      maxHeight: '40px',
                      borderRadius: '50%',
                    }}
                    className="nav-link"
                  />
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="nav-link btn btn-secondary"
                    onClick={() => {
                      app.auth().signOut();
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
