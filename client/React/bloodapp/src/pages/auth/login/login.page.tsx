import React from "react";
import logo from "../../../assets/images/logo.png";

export default function BloodLoginDesign() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* Left Side - Logo & Info */}
          <div className="bg-cyan-950 text-white flex flex-col items-center justify-center p-10">
            <img src={logo} alt="Blood Logo" className="w-24 h-24 mb-4" />
            <h1 className="text-3xl font-bold">Blood Register</h1>
            <p className="text-sm mt-2 text-red-100 text-center">
              Login to manage your donor/receiver account.
            </p>
          </div>

          {/* Right Side - Login Form */}
          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-2">Welcome Back</h2>
            <p className="text-sm text-gray-500 mb-6">
              Please enter your credentials to continue.
            </p>

            <form className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium">Email</span>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-lg border border-gray-200 p-2 outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="you@example.com"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium">Password</span>
                <input
                  type="password"
                  className="mt-1 block w-full rounded-lg border border-gray-200 p-2 outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your password"
                />
              </label>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  Remember me
                </label>
                <a href="#" className="text-red-600 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl shadow-sm font-medium text-white bg-cyan-950 hover:bg-zinc-800"
              >
                Login
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-6 text-center">
              Don’t have an account?{" "}
              <a
                href="/register"
                className="text-red-600 font-medium hover:underline"
              >
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Footer */}
      <footer className="bg-white border-t shadow-sm">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
