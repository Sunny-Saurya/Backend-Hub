import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      alert("All Fields are Required!");
      return;
    }

    try {

      const response = await fetch(
        "http://localhost:5000/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {

        alert("Login Successfully!");

        // ✅ Save token + update AuthContext
        login(data.token);

        // ✅ Go to dashboard
        navigate("/dashboard");

      } else {

        alert(
          `Login failed: ${
            data.message || "Something went wrong"
          }`
        );

      }

    } catch (error) {

      console.error("Login error:", error);
      alert("Unable to connect to the server");

    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">

        <h1 className="text-3xl font-bold text-center mb-8">
          Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          <div className="space-y-2">

            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-300"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-zinc-500 outline-none transition focus:border-white focus:ring-2 focus:ring-white/10"
            />

          </div>


          <div className="space-y-2">

            <label
              htmlFor="password"
              className="block text-sm font-medium text-zinc-300"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-zinc-500 outline-none transition focus:border-white focus:ring-2 focus:ring-white/10"
            />

          </div>


          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-semibold rounded-lg transition hover:bg-zinc-200 active:scale-[0.98]"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;