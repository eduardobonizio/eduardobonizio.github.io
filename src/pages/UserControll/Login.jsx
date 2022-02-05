import React, { useCallback, useContext, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';

import { AuthContext } from '../../api/Auth';
import app, { signInWithGoogle } from '../../api/Firebase';
import image from '../../assets/Index';

function Login() {
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = useCallback(async event => {
    event.preventDefault();
    const TENSECONDS = 1000;
    const { email, password } = event.target.elements;
    try {
      await app.auth().signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      if (!showAlert) {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, TENSECONDS);
      }
    }
  });

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/quiz" />;
  }

  return (
    <div className="container d-flex flex-column align-items-center">
      <h1>Fazer Login</h1>
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
      {showAlert && (
        <div className="alert alert-danger" role="alert">
          Usuário ou senha incorreta
        </div>
      )}
    </div>
  );
}

export default Login;
