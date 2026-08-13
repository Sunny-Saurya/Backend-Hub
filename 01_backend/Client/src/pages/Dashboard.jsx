import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm text-zinc-500 mb-2">
            Overview
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            Dashboard
          </h1>

          <p className="text-zinc-400 mt-2">
            Welcome back! Here's what's happening with your account.
          </p>
        </div>


        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition">
            <p className="text-sm text-zinc-500">
              Total Users
            </p>

            <h2 className="text-3xl font-bold mt-3">
              1,248
            </h2>

            <p className="text-sm text-green-400 mt-2">
              +12.5% this month
            </p>
          </div>


          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition">
            <p className="text-sm text-zinc-500">
              Active Users
            </p>

            <h2 className="text-3xl font-bold mt-3">
              892
            </h2>

            <p className="text-sm text-green-400 mt-2">
              +8.2% this month
            </p>
          </div>


          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition">
            <p className="text-sm text-zinc-500">
              Projects
            </p>

            <h2 className="text-3xl font-bold mt-3">
              24
            </h2>

            <p className="text-sm text-zinc-400 mt-2">
              4 updated recently
            </p>
          </div>


          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition">
            <p className="text-sm text-zinc-500">
              Revenue
            </p>

            <h2 className="text-3xl font-bold mt-3">
              $12.4K
            </h2>

            <p className="text-sm text-green-400 mt-2">
              +18.4% this month
            </p>
          </div>

        </div>


        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Activity */}
          <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            <div className="flex items-center justify-between mb-6">

              <div>
                <h2 className="text-lg font-semibold">
                  Recent Activity
                </h2>

                <p className="text-sm text-zinc-500 mt-1">
                  Latest activity from your account
                </p>
              </div>

              <button className="text-sm text-zinc-400 hover:text-white transition">
                View all
              </button>

            </div>


            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                  ✓
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Profile updated
                  </p>

                  <p className="text-xs text-zinc-500 mt-1">
                    Your profile information was updated
                  </p>
                </div>

                <span className="text-xs text-zinc-500">
                  2m ago
                </span>
              </div>


              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                  +
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium">
                    New project created
                  </p>

                  <p className="text-xs text-zinc-500 mt-1">
                    You created a new project
                  </p>
                </div>

                <span className="text-xs text-zinc-500">
                  1h ago
                </span>
              </div>


              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                  ↗
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Login successful
                  </p>

                  <p className="text-xs text-zinc-500 mt-1">
                    New login detected
                  </p>
                </div>

                <span className="text-xs text-zinc-500">
                  3h ago
                </span>
              </div>

            </div>

          </div>


          {/* Quick Actions */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            <h2 className="text-lg font-semibold">
              Quick Actions
            </h2>

            <p className="text-sm text-zinc-500 mt-1 mb-6">
              Manage your account
            </p>


            <div className="space-y-3">

              <button className="w-full text-left px-4 py-3 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition">
                Create Project
              </button>

              <button className="w-full text-left px-4 py-3 rounded-xl border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white transition">
                Edit Profile
              </button>

              <button className="w-full text-left px-4 py-3 rounded-xl border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white transition">
                Settings
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;