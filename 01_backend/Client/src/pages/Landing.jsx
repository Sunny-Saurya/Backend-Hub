import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6">

        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-zinc-800/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-zinc-800 bg-zinc-900/70 text-sm text-zinc-400">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Everything you need, in one place
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Build.
            <span className="text-zinc-500"> Manage.</span>
            <br />
            <span className="text-zinc-300">Grow.</span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto mt-6 text-lg sm:text-xl text-zinc-400 leading-relaxed">
            A simple and powerful platform designed to help you
            manage everything from one beautiful dashboard.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

            <Link
              to="/signup"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-all active:scale-95"
            >
              Get Started →
            </Link>

            <Link
              to="/login"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-zinc-700 bg-zinc-900/50 text-white font-medium hover:bg-zinc-800 transition-all"
            >
              Login
            </Link>

          </div>

          {/* Trust text */}
          <p className="mt-6 text-sm text-zinc-600">
            Simple • Secure • Fast
          </p>

        </div>
      </section>


      {/* Features */}
      <section className="border-t border-zinc-900 py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-sm text-zinc-500 uppercase tracking-widest">
              Features
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              Everything in one place
            </h2>

            <p className="text-zinc-500 mt-4 max-w-xl mx-auto">
              Powerful features with a simple interface that
              gets out of your way.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Card 1 */}
            <div className="group p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 transition-all">

              <div className="w-11 h-11 rounded-xl bg-zinc-800 flex items-center justify-center text-xl mb-6">
                ⚡
              </div>

              <h3 className="text-lg font-semibold">
                Fast & Simple
              </h3>

              <p className="text-sm text-zinc-500 mt-3 leading-relaxed">
                Designed to keep things simple while giving
                you everything you need.
              </p>

            </div>


            {/* Card 2 */}
            <div className="group p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 transition-all">

              <div className="w-11 h-11 rounded-xl bg-zinc-800 flex items-center justify-center text-xl mb-6">
                🔒
              </div>

              <h3 className="text-lg font-semibold">
                Secure
              </h3>

              <p className="text-sm text-zinc-500 mt-3 leading-relaxed">
                Your account and data are protected with
                secure authentication.
              </p>

            </div>


            {/* Card 3 */}
            <div className="group p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 transition-all">

              <div className="w-11 h-11 rounded-xl bg-zinc-800 flex items-center justify-center text-xl mb-6">
                📊
              </div>

              <h3 className="text-lg font-semibold">
                Powerful Dashboard
              </h3>

              <p className="text-sm text-zinc-500 mt-3 leading-relaxed">
                Get a clear overview of your activity and
                manage everything from one dashboard.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="border-t border-zinc-900 py-24 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to get started?
          </h2>

          <p className="text-zinc-500 mt-4">
            Create your account and start exploring.
          </p>

          <Link
            to="/signup"
            className="inline-block mt-8 px-7 py-3.5 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-all active:scale-95"
          >
            Create Account
          </Link>

        </div>

      </section>


      {/* Footer */}
      <footer className="border-t border-zinc-900 py-8 px-6">

        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-sm text-zinc-600">
            © 2026 MyApp. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-zinc-500">
            <Link
              to="/about"
              className="hover:text-white transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="hover:text-white transition"
            >
              Contact
            </Link>
          </div>

        </div>

      </footer>

    </div>
  );
};

export default Landing;