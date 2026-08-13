import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    // Stop normal browser form submission
    e.preventDefault();

    const form = e.currentTarget;

    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    

    console.log("Registering:", username, email, password);

    // Basic validation
    if (!username || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        }
      );

      if (response.ok) {
        alert("Registration successful!");

        // Go to React login page
        navigate("/login");
      } else {
        alert(
          `Registration failed: ${
            data.message || "Something went wrong"
          }`
        );
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Unable to connect to the server");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Create Account
          </h1>

          <p className="text-zinc-400 mt-2 text-sm">
            Register to get started
          </p>
        </div>

        {/* Register Form */}
        <form
          onSubmit={handleRegister}
          className="space-y-6"
        >

          {/* Username */}
          <div className="space-y-2">
            <label
              htmlFor="username"
              className="text-sm font-medium text-zinc-200"
            >
              Username
            </label>

            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="w-full rounded-lg bg-zinc-950 border border-zinc-700 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:border-white focus:ring-2 focus:ring-white/10"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-200"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full rounded-lg bg-zinc-950 border border-zinc-700 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:border-white focus:ring-2 focus:ring-white/10"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-zinc-200"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full rounded-lg bg-zinc-950 border border-zinc-700 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:border-white focus:ring-2 focus:ring-white/10"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-white text-black py-3 font-semibold transition hover:bg-zinc-200 active:scale-[0.98]"
          >
            Register
          </button>

        </form>

        {/* Login */}
        <p className="text-center text-sm text-zinc-500 mt-6">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-white hover:underline"
          >
            Login
          </button>
        </p>

      </div>
    </div>
  );
};

export default Register;