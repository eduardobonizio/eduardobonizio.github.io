import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../api/Auth';
import app, { signInWithGoogle } from '../../api/Firebase';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        console.log(error);
      }
    },
    [history],
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container d-flex flex-column align-items-center">
      <h1>Log in</h1>
      <form onSubmit={handleLogin} className="d-flex flex-column">
        <label htmlFor="email" className="d-flex flex-column">
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label htmlFor="password" className="d-flex flex-column">
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button
          type="submit"
          style={{
            width: '100%',
            backgroundColor: 'transparent',
            border: 'none',
          }}
        >
          Log in
        </button>
      </form>
      <button
        type="submit"
        style={{
          width: '100%',
          backgroundColor: 'transparent',
          border: 'none',
        }}
      >
        <Link to="/signup">Sign Up</Link>
      </button>
      <button
        type="button"
        style={{
          width: '100%',
          backgroundColor: 'transparent',
          border: 'none',
        }}
        onClick={() => signInWithGoogle()}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default withRouter(Login);
