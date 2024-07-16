// src/components/Profile.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// src/components/Popover.js
import React, { useState, useEffect, useRef } from 'react';



const Profile = () => {
  const { user, isAuthenticated, loginWithRedirect, logout} = useAuth0();
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      ) : (
        <>
          <div className="relative inline-block text-left" ref={popoverRef}>
            <button
              type="button"
              onClick={togglePopover}
              className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full focus:outline-none"
            >
              <img
                src={user.picture}
                alt={user.name}
                className="w-12 rounded-full"
              />
            </button>

            {isOpen && (
              <div className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="flex flex-col gap-2 p-4 justify-start">
                    <p className=" text-gray-500">
                    {user.email}
                    </p>
                  <button onClick={() => logout({ returnTo: window.location.origin })} className="w-fit">
                    Log out
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
