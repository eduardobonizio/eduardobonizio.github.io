import React, { useCallback, useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';

import { AuthContext } from '../../api/Auth';
import app, { signInWithGoogle } from '../../api/Firebase';
import image from '../../assets/Index';

function Login() {
  const handleLogin = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app.auth().signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      console.log(error);
    }
  });

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/quiz" />;
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
      />
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
      Dont have an account? <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default Login;
