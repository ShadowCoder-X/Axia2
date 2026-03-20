import React from "react";

function Login() {
  return (
    <div>
      <div>
        <form action="">
          <h2>Login</h2>

          <input
            type="text"
            name="email"
            placeholder="Email"
            value=""
            //  onChange={handleChange}
            className=""
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value=""
            // onChange={handleChange}
            className=""
          />

          <div>
            <label>
              <input
                type="checkbox"
                name="remember"
                //checked={form.remember}
                //  onChange={handleChange}
                className=""
              />
            </label>

            <input
              type="text"
              name="email"
              placeholder="Email"
              value=""
              //  onChange={handleChange}
              className=""
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
