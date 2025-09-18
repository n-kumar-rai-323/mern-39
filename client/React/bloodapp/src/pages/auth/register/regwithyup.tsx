import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "Donor" | "Receiver";
  bloodGroup: string;
  phone: string;
  address: string;
  dob: string; // yyyy-mm-dd
};

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const schema = yup.object({
  fullName: yup.string().required("Full name is required").min(3, "Too short"),
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup.string().required("Password is required").min(6, "Minimum 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
  role: yup.mixed().oneOf(["Donor", "Receiver"]).required("Select a role"),
  bloodGroup: yup.string().required("Select blood group"),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(/^\+?[0-9\- ]{6,20}$/, "Invalid phone number"),
  address: yup.string().required("Address is required").min(5),
  dob: yup
    .string()
    .required("Date of birth is required")
    .test("age", "You must be at least 16 years old", (val) => {
      if (!val) return false;
      const birth = new Date(val);
      const today = new Date();
      const age = today.getFullYear() - birth.getFullYear();
      const m = today.getMonth() - birth.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) return age - 1 >= 16;
      return age >= 16;
    }),
}).required();

export default function BloodRegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    setSuccessMessage(null);
    try {
      // Example: POST to your API endpoint. Replace with your real route.
      const res = await fetch("/api/blood/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json?.message || "Failed to register");
      }

      setSuccessMessage("Registration successful. Thank you!");
      reset();
    } catch (err: any) {
      setServerError(err?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-semibold mb-2">Blood Register</h1>
        <p className="text-sm text-gray-500 mb-6">Register as a donor or receiver so hospitals and clinics can contact you when needed.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-medium">Full name</span>
              <input
                {...register("fullName")}
                className={`mt-1 block w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-offset-1 ${errors.fullName ? "border-red-400" : "border-gray-200"}`}
                placeholder="Your full name"
              />
              {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>}
            </label>

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
                placeholder="Create a password"
              />
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
            </label>

            <label className="block">
              <span className="text-sm font-medium">Confirm Password</span>
              <input
                {...register("confirmPassword")}
                type="password"
                className={`mt-1 block w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-offset-1 ${errors.confirmPassword ? "border-red-400" : "border-gray-200"}`}
                placeholder="Repeat your password"
              />
              {errors.confirmPassword && <p className="text-xs text-red-500 mt-1">{errors.confirmPassword.message}</p>}
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label className="block">
              <span className="text-sm font-medium">Role</span>
              <select {...register("role")} className="mt-1 block w-full rounded-lg border p-2 outline-none">
                <option value="">Select role</option>
                <option value="Donor">Donor</option>
                <option value="Receiver">Receiver</option>
              </select>
              {errors.role && <p className="text-xs text-red-500 mt-1">{errors.role.message}</p>}
            </label>

            <label className="block">
              <span className="text-sm font-medium">Blood group</span>
              <select {...register("bloodGroup")} className="mt-1 block w-full rounded-lg border p-2 outline-none">
                <option value="">Select blood group</option>
                {bloodGroups.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
              {errors.bloodGroup && <p className="text-xs text-red-500 mt-1">{errors.bloodGroup.message}</p>}
            </label>

            <label className="block">
              <span className="text-sm font-medium">Phone</span>
              <input
                {...register("phone")}
                className={`mt-1 block w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-offset-1 ${errors.phone ? "border-red-400" : "border-gray-200"}`}
                placeholder="+977-98xxxxxxx"
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
            </label>
          </div>

          <label className="block">
            <span className="text-sm font-medium">Address</span>
            <input
              {...register("address")}
              className={`mt-1 block w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-offset-1 ${errors.address ? "border-red-400" : "border-gray-200"}`}
              placeholder="Your full address"
            />
            {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address.message}</p>}
          </label>

          <label className="block">
            <span className="text-sm font-medium">Date of birth</span>
            <input
              {...register("dob")}
              type="date"
              className={`mt-1 block w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-offset-1 ${errors.dob ? "border-red-400" : "border-gray-200"}`}
            />
            {errors.dob && <p className="text-xs text-red-500 mt-1">{errors.dob.message}</p>}
          </label>

          {serverError && <p className="text-sm text-red-600">{serverError}</p>}
          {successMessage && <p className="text-sm text-green-600">{successMessage}</p>}

          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-xl shadow-sm font-medium text-white ${isSubmitting ? "bg-gray-400" : "bg-red-600 hover:bg-red-700"}`}
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
                "Register"
              )}
            </button>

            <button
              type="button"
              onClick={() => reset()}
              className="text-sm px-3 py-2 rounded-lg border"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
