import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-red-50 to-gray-50">
      {/* Navbar */}
      <header className="bg-cyan-950 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold">Blood Donation App</h1>
          <nav className="space-x-6">
            <Link to="/" className="hover:text-red-400">Home</Link>
            <Link to="/donors" className="hover:text-red-400">Find Donors</Link>
            <Link to="/register" className="hover:text-red-400">Register</Link>
            <Link to="/login" className="hover:text-red-400">Login</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-950">
          Donate Blood, Save Lives ❤️
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Join our network of blood donors and receivers. Every drop counts and can save a life.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            to="/register"
            className="px-6 py-3 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 shadow"
          >
            Become a Donor
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 rounded-lg bg-gray-200 text-cyan-950 font-semibold hover:bg-gray-300 shadow"
          >
            Login
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t shadow-sm mt-10">
        <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row items-center justify-between">
          <span className="text-sm text-gray-500">
            © 2023 Blood Donation App. All Rights Reserved.
          </span>
          <ul className="flex space-x-6 text-sm font-medium text-gray-500">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
