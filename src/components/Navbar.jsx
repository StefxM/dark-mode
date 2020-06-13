import React from 'react';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import useDarkMode from "../hooks/useDarkMode";
import Bitcoin from "./bitcoin";
import Ethereum from "./ethereum";

const Navbar = () => {
  const [someValue, toggle] = useDarkMode("dark",false);
  
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <Router>
      <nav>
      <Link to="/bitcoin">Bitcoin</Link>
      <Link to="/ethereum">Ethereum</Link>
      </nav>
      
      <Switch>
          <Route exact path="/bitcoin">
            
          </Route>
          <Route exact path="/ethereum">
            
          </Route>
      </Switch>
      </Router>
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
