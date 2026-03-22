import React from "react";

function Dashboard() {
  return (
    <div>
      <div>
        <div>
          <h1 className="text-4xl font-black font-sans-serif p-4">Dashboard</h1>
        </div>

        <nav className="text-2xl flex justify-around border-green-500 w-full border-b-3 mb-20 ">
          <a href="/">Home</a>
          <a href="/feature">Features</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
          <a href="/signup">SignUp</a>
        </nav>

        <h2 className="text-3xl text-center font-bold">
          Welcome to Dashboard Overview
        </h2>
      </div>

      <div>
        <article className="m-4"> This is where the whole will be</article>
      </div>

      <div className="text-center">
        <button className=" m-4 p-2 border-none rounded-md w-60 text-2xl bg-green-600">
          Get Started
        </button>
      </div>

      <div>
        <div className="grid grid-cols-3 gap-4 p-4 text-center max-auto w-full ">
          <div className="border-2 rounded-md">
            <h3> Fast Performance</h3>
            <p>
              {" "}
              Experience lighting_fast load times that keeps user engaged and
              improve overall efficiency{" "}
            </p>
          </div>

          <div className="border-2 rounded-md">
            <h3> Secure Payments</h3>
            <p> This is two</p>
          </div>

          <div className="border-2 rounded-md">
            <h3>Easy Integration</h3>
            <p> This is two</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
