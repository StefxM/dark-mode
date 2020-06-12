import React from 'react';

import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
  const [someValue, toggle] = useDarkMode("dark",false);
  
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggle}
          className={someValue ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
