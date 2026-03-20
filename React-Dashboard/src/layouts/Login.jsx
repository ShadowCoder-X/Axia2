import { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://simple-crud-backend-6o49.onrender.com/api/v1/auth/login",
        {
          method: "POST",
          header: { "Content-Type": "Application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password,
          }),
        },
      );

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex justify-center  w-full h-150 p-6  ">
      <form
        onSubmit={handleSubmit}
        className="p-10 text-center bg-gray-200 rounded-xl "
      >
        <h2 className="text-3xl font-bold text-black mb-4 ">Login</h2>

        <div className="text-left">
          <div className="mb-4">
            <label for="email">Email: </label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full mb-3 p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label for="password">Password: </label>

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full mb-3 p-2 border rounded"
            />
          </div>

          <div className="flex justify-between items-center mb-3">
            <label>
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="w-full mb-3 p-2 border rounded"
              />
              {""}
              Remember Me
            </label>

            <a href="#" className="text-sm text-gray-500">
              Forgot Password?
            </a>
          </div>

          <button className="mb-3 w-full bg-blue-500 text-white p-2 rounded cursor-pointer">
            Login
          </button>

          <p className="text-sm mt-3 text-center">Don't have an account?</p>

          <a href="/signup" className="text-gray-500">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
