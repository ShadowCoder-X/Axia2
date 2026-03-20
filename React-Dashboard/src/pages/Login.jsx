import React from "react";

function Login() {
  return (
    <div>
      <form action="" className=" ">
        <h2>Login</h2>

        <div>
          <label for="email">Email: </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value=""
            //  onChange={handleChange}
            className=" border 2"
          />
        </div>

        <div>
          <label for="password">Password: </label>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value=""
            // onChange={handleChange}
            className=" border-2"
          />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="remember"
              //checked={form.remember}
              //  onChange={handleChange}
              className=""
            />
            {""}
            Remember Me
          </label>

          <a href="#">Forget Password</a>
        </div>

        <button className="">Login</button>

        <p className="">Don't have an account</p>

        <a href="/signup"> Sign Up</a>
      </form>
    </div>
  );
}

export default Login;
