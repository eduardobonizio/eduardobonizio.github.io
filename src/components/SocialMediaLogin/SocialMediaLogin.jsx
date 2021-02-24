import React, { useEffect } from 'react';

import { ui, uiConfig } from '../../Firebase';

export default function SocialMediaLogin() {
  useEffect(() => {
    ui.start('#firebaseui-auth-container', uiConfig);
  }, []);

  return (
    <div>
      <div id="firebaseui-auth-container" />
    </div>
  );
}
