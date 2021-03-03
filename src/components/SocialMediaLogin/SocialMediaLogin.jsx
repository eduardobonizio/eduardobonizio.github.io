import React, { useEffect, useState } from 'react';

import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';

import { uiConfig } from '../../Firebase';

export default function SocialMediaLogin() {
  const [loading, setLoading] = useState(true);
  async function userLoginInterface() {
    // eslint-disable-next-line immutable/no-let
    let ui = await firebaseui.auth.AuthUI.getInstance();
    if (!ui) ui = new firebaseui.auth.AuthUI(firebase.auth());
    setLoading(false);
    ui.start('#firebaseui-auth-container', uiConfig);
  }

  useEffect(() => {
    userLoginInterface();
  }, []);

  if (loading) {
    return 'Loading...';
  }

  return (
    <div>
      <div id="firebaseui-auth-container" />
    </div>
  );
}
