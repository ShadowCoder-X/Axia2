import React from "react";
import { Link } from "react-router-dom";

// import user from "./assets/user.png";
// import email from "./assets/email.png";
// import password from "./assets/password.png";
function Navigation() {
  return (
    <div className=" max-w-5xl mx-auto">
      <div>
        {/* <h2>Navigation</h2> */}

        <nav className=" flex justify-around text-2xl text-green-700 ">
          <div>
            <Link to="/">Home</Link>
          </div>

          <div>
            <Link to="/about">About</Link>
            <Link to="/signup">SignUp</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
