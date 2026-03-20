import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "../layouts/Login";
import SignUp from "../layouts/SignUp";

function Contact() {
  return (
    <div>
      <div>
        <h2>You can Login Here</h2>
      </div>

      <nav>
        <Link to="login">Login</Link>
        <Link to="signup">SignUp</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default Contact;
