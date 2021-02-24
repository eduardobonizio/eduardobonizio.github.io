/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';

import SocialMediaLogin from '../../components/SocialMediaLogin/SocialMediaLogin';

export default function Login() {
  const history = useHistory();
  const currentUser = useSelector(state => state.currentUser);

  return (
    <>
      {currentUser ? (
        <Redirect to="/game" />
      ) : (
        <div className="container d-flex flex-column align-items-center">
          <h1>Log in</h1>
          <SocialMediaLogin />
        </div>
      )}
    </>
  );
}
