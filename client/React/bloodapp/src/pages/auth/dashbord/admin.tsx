import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Droplet,
  ClipboardList,
  LogOut,
} from "lucide-react";

export default function AdminDashboard() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-cyan-950 text-white flex flex-col">
        <div className="px-6 py-4 text-2xl font-bold border-b border-gray-700">
          Blood Admin
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <button
            onClick={() => setActive("dashboard")}
            className={`flex items-center w-full px-4 py-2 rounded-lg ${
              active === "dashboard"
                ? "bg-red-600 text-white"
                : "hover:bg-gray-800"
            }`}
          >
            <LayoutDashboard className="mr-3" size={20} /> Dashboard
          </button>

          <button
            onClick={() => setActive("users")}
            className={`flex items-center w-full px-4 py-2 rounded-lg ${
              active === "users"
                ? "bg-red-600 text-white"
                : "hover:bg-gray-800"
            }`}
          >
            <Users className="mr-3" size={20} /> Users
          </button>

          <button
            onClick={() => setActive("donors")}
            className={`flex items-center w-full px-4 py-2 rounded-lg ${
              active === "donors"
                ? "bg-red-600 text-white"
                : "hover:bg-gray-800"
            }`}
          >
            <Droplet className="mr-3" size={20} /> Donors
          </button>

          <button
            onClick={() => setActive("requests")}
            className={`flex items-center w-full px-4 py-2 rounded-lg ${
              active === "requests"
                ? "bg-red-600 text-white"
                : "hover:bg-gray-800"
            }`}
          >
            <ClipboardList className="mr-3" size={20} /> Requests
          </button>
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-red-700">
            <LogOut className="mr-3" size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {active === "dashboard" && (
          <DashboardOverview />
        )}
        {active === "users" && <UsersTable />}
        {active === "donors" && <DonorsTable />}
        {active === "requests" && <RequestsTable />}
      </main>
    </div>
  );
}

// Dashboard Overview
function DashboardOverview() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Total Users</h3>
          <p className="text-2xl font-bold">120</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Total Donors</h3>
          <p className="text-2xl font-bold">75</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Pending Requests</h3>
          <p className="text-2xl font-bold">18</p>
        </div>
      </div>
    </div>
  );
}

// Users Table
function UsersTable() {
  const users = [
    { id: 1, name: "Nishan Rai", email: "nishan@example.com", role: "Donor" },
    { id: 2, name: "Anita Koirala", email: "anita@example.com", role: "Receiver" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Users</h2>
      <table className="w-full bg-white rounded-xl shadow">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.email}</td>
              <td className="p-3">{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Donors Table
function DonorsTable() {
  const donors = [
    { id: 1, name: "Suman Sharma", blood: "O-", location: "Kathmandu" },
    { id: 2, name: "Sunita Lama", blood: "A+", location: "Pokhara" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Donors</h2>
      <table className="w-full bg-white rounded-xl shadow">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Blood Group</th>
            <th className="p-3">Location</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((d) => (
            <tr key={d.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{d.name}</td>
              <td className="p-3">{d.blood}</td>
              <td className="p-3">{d.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Requests Table
function RequestsTable() {
  const requests = [
    { id: 1, patient: "Krishna Thapa", blood: "B+", status: "Pending" },
    { id: 2, patient: "Maya Tamang", blood: "AB-", status: "Approved" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Blood Requests</h2>
      <table className="w-full bg-white rounded-xl shadow">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Patient</th>
            <th className="p-3">Blood Group</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((r) => (
            <tr key={r.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{r.patient}</td>
              <td className="p-3">{r.blood}</td>
              <td className="p-3">{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
