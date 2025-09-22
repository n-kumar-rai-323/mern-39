import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="mt-4 text-gray-600 text-lg">Oops! Page not found.</p>
      <Link
        to="/login"
        className="mt-6 px-5 py-2 rounded-lg bg-cyan-950 text-white hover:bg-red-700"
      >
        Go to Login
      </Link>
    </div>
  );
}
