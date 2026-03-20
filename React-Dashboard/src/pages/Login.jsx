import React from "react";

function Login() {
  return (
    <div className="flex justify-center  w-[100%] h-110 p-6  ">
      <form action="" className="p-10 text-center bg-gray-200 border-double ">
        <h2 className="text-3xl font-bold text-black mb-4 ">Login</h2>

        <div className="text-left">
          <div className="mb-4">
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

          <div className="mb-4">
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

          <div className="mb-4">
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

            <a href="#" className="mb-3">
              Forget Password
            </a>
          </div>

          <button className="mb-3">Login</button>

          <p className="mb-3">Don't have an account</p>

          <a href="/signup"> Sign Up</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
