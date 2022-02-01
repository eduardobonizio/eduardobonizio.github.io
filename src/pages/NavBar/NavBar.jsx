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
    <div className="container d-flex">
      <div>Home</div>
      <div className="container d-flex">
        <Link to="/game">Quizz</Link>
        <Link to="/30-dias-css">Desafio CSS</Link>
        <Link to="/github-pages-react">Github pages com react</Link>
        <span>
          <div>{globalUser.displayName}</div>
        </span>
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
