import React from "react";
import logo from "../../../assets/images/logo.png";

export default function BloodRegisterDesign() {
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6 overflow-hidden">
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden h-full">
          {/* Left Side - Logo & Name */}
          <div className="bg-cyan-950 text-white flex flex-col items-center justify-center p-10">
            <img src={logo} alt="Blood Logo" className="w-24 h-24 mb-4" />
            <h1 className="text-3xl font-bold">Blood Register</h1>
            <p className="text-sm mt-2 text-red-100 text-center">
              Donate blood, save lives. Register as a donor or receiver today.
            </p>
          </div>

          {/* Right Side - Register Form */}
          <div className="p-8 overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-2">Create an Account</h2>
            <p className="text-sm text-gray-500 mb-6">
              Fill in your details to register in the blood donor/receiver
              network.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm font-medium">Full name</span>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-lg border border-gray-200 p-2 outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your full name"
                  />
                </label>

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
                    placeholder="Create a password"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium">Confirm Password</span>
                  <input
                    type="password"
                    className="mt-1 block w-full rounded-lg border border-gray-200 p-2 outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Repeat your password"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="block">
                  <span className="text-sm font-medium">Role</span>
                  <select className="mt-1 block w-full rounded-lg border border-gray-200 p-2 outline-none focus:ring-2 focus:ring-red-500">
                    <option value="">Select role</option>
                    <option value="Donor">Donor</option>
                    <option value="Receiver">Receiver</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-sm font-medium">Blood group</span>
                  <select className="mt-1 block w-full rounded-lg border border-gray-200 p-2 outline-none focus:ring-2 focus:ring-red-500">
                    <option value="">Select blood group</option>
                    {bloodGroups.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="text-sm font-medium">Phone</span>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-lg border border-gray-200 p-2 outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="+977-98xxxxxxx"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium">Address</span>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-lg border border-gray-200 p-2 outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your full address"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium">Date of birth</span>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-lg border border-gray-200 p-2 outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl shadow-sm font-medium text-white bg-cyan-950 hover:bg-red-700"
                >
                  Register
                </button>

                <button
                  type="reset"
                  className="text-sm px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Fixed Footer */}
      <footer className="bg-white border-t shadow-sm">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
