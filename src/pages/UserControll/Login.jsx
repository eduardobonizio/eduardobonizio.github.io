/* eslint-disable immutable/no-let */
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import SocialMediaLogin from '../../components/SocialMediaLogin/SocialMediaLogin';

export default function Login() {
  const currentUser = useSelector(state => state.currentUser);

  if (currentUser) {
    return <Redirect to="/game" />;
  }
  return (
    <div className="container d-flex flex-column align-items-center">
      <h1>Log in</h1>
      <SocialMediaLogin />
    </div>
  );
}
