// src/components/AuthButton.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthButton = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      ) : (
        <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
      )}
    </div>
  );
};

export default AuthButton;
