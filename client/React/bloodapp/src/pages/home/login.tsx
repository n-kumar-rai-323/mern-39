import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type LoginData = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup.string().required("Password is required"),
}).required();

export default function BloodLoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginData>({ resolver: yupResolver(schema) });

  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit = async (data: LoginData) => {
    setServerError(null);
    setSuccessMessage(null);
    try {
      // Example: POST to your API endpoint. Replace with your real route.
      const res = await fetch("/api/blood/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json?.message || "Login failed");
      }

      setSuccessMessage("Login successful. Redirecting...");
      reset();
      // You can redirect to dashboard here, e.g. window.location.href = "/dashboard";
    } catch (err: any) {
      setServerError(err?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-semibold mb-2">Blood Login</h1>
        <p className="text-sm text-gray-500 mb-6">Login with your registered email and password.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Email</span>
            <input
              {...register("email")}
              type="email"
              className={`mt-1 block w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-offset-1 ${errors.email ? "border-red-400" : "border-gray-200"}`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </label>

          <label className="block">
            <span className="text-sm font-medium">Password</span>
            <input
              {...register("password")}
              type="password"
              className={`mt-1 block w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-offset-1 ${errors.password ? "border-red-400" : "border-gray-200"}`}
              placeholder="Your password"
            />
            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
          </label>

          {serverError && <p className="text-sm text-red-600">{serverError}</p>}
          {successMessage && <p className="text-sm text-green-600">{successMessage}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl shadow-sm font-medium text-white ${isSubmitting ? "bg-gray-400" : "bg-red-600 hover:bg-red-700"}`}
          >
            {isSubmitting ? (
              <svg
                className="animate-spin h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
              </svg>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
