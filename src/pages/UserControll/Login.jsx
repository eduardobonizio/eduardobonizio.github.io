import React, { useCallback, useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../api/Auth';
import app, { signInWithGoogle } from '../../api/Firebase';
import image from '../../assets/Index';

function Login() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = useCallback(async event => {
    event.preventDefault();
    const TENSECONDS = 10000;
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

  const goToRegisterPage = () => navigate('/signup');

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/quiz" />;
  }

  return (
    <div className="container d-flex flex-column align-items-center input-groups">
      <h1>Fazer Login</h1>
      <form onSubmit={handleLogin} className="d-flex flex-column">
        <input
          type="email"
          className="form-control mb-1"
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon1"
          name="email"
        />
        <input
          type="password"
          className="form-control mb-1"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
          name="password"
        />
        <button type="submit" className="btn btn-primary mb-1">
          Login
        </button>
        <button
          type="button"
          className="btn btn-primary mb-1"
          onClick={goToRegisterPage}
        >
          Register
        </button>
      </form>

      <button
        type="button"
        className="mb-1"
        style={{
          backgroundColor: 'transparent',
          border: 'none',
        }}
        onClick={() => signInWithGoogle()}
      >
        <img src={image.GoogleLoginButton} alt="Login with google" />
      </button>
      {showAlert && (
        <div
          className="alert alert-danger position-absolute start-50 translate-middle alert-fixed"
          role="alert"
        >
          Usuário ou senha incorreta
        </div>
      )}
    </div>
  );
}

export default Login;
