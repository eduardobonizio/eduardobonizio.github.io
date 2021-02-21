import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import app, { signInWithGoogle } from '../../api/Firebase';
import image from '../../assets/Index';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        console.log(error);
      }
    },
    [history],
  );

  return (
    <div className="container d-flex flex-column align-items-center">
      <h1>Sign up</h1>
      <div className="d-flex flex-column align-items-center">
        <form onSubmit={handleSignUp} className="d-flex flex-column">
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
            Sign Up
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
          <Link to="/login">Login</Link>
        </button>
        <button
          type="button"
          style={{
            backgroundColor: 'transparent',
            border: 'none',
          }}
          onClick={() => signInWithGoogle()}
        >
          <img src={image.GoogleLoginButton} alt="Login with google" />
        </button>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
