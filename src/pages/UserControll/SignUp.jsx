import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import app, { signInWithGoogle } from '../../api/Firebase';
import image from '../../assets/Index';

function SignUp({ history }) {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const TENSECONDS = 10000;
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        navigate('/quiz');
      } catch (error) {
        if (!showAlert) {
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, TENSECONDS);
        }
      }
    },
    [history],
  );

  const goToLoginPage = () => navigate('/login');

  return (
    <div className="container d-flex flex-column align-items-center input-groups">
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp} className="d-flex flex-column">
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
          Register
        </button>
        <button
          type="submit"
          className="btn btn-primary mb-1"
          onClick={goToLoginPage}
        >
          Login
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
          className="alert alert-danger position-absolute top-100 start-50 translate-middle alert-fixed"
          role="alert"
        >
          Usuário já cadastrado
        </div>
      )}
    </div>
  );
}

export default SignUp;
