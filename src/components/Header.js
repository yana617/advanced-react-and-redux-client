import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './HeaderStyle.css';

const Header = () => {
  const isAuthenticated = useSelector(state => state.auth.authenticated);

  return (
    <header>
      <Link to="/">Redux auth</Link>
      {isAuthenticated ? (
        <>
          <Link to="/signout">Sign out</Link>
          <Link to="/feature">Feature</Link>
        </>
      ) : (
        <>
          <Link to="/signup">Sign up</Link>
          <Link to="/signin">Sign in</Link>
        </>
      )}
    </header>
  );
};

export default Header;
