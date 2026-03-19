import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div>
        {/* <h2>Navigation</h2> */}

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/signup">SignUp</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
