import React, { useState } from "react";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function FindDonors() {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [location, setLocation] = useState("");

  // Fake donors data (you can replace with API later)
  const donors = [
    { id: 1, name: "Nishan Rai", blood: "A+", phone: "9812345678", location: "Sindhuli" },
    { id: 2, name: "Suman Sharma", blood: "O-", phone: "9823456789", location: "Kathmandu" },
    { id: 3, name: "Anita Koirala", blood: "B+", phone: "9801234567", location: "Pokhara" },
  ];

  const filteredDonors = donors.filter(
    (d) =>
      (selectedGroup ? d.blood === selectedGroup : true) &&
      (location ? d.location.toLowerCase().includes(location.toLowerCase()) : true)
  );

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-red-50 to-gray-50">
      {/* Header */}
      <header className="bg-cyan-950 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Find Blood Donors</h1>
        </div>
      </header>

      {/* Filters */}
      <div className="max-w-7xl mx-auto w-full px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white shadow p-6 rounded-xl">
          <div>
            <label className="block text-sm font-medium text-gray-700">Blood Group</label>
            <select
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-200 p-2 outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">All</option>
              {bloodGroups.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-200 p-2 outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={() => {
                setSelectedGroup("");
                setLocation("");
              }}
              className="w-full px-5 py-2 rounded-lg bg-cyan-950 text-white font-medium hover:bg-red-700"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      {/* Donor List */}
      <main className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
        {filteredDonors.length > 0 ? (
          filteredDonors.map((donor) => (
            <div
              key={donor.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-cyan-950">{donor.name}</h3>
              <p className="text-sm text-gray-600 mt-1">Blood Group: <span className="font-semibold">{donor.blood}</span></p>
              <p className="text-sm text-gray-600">Location: {donor.location}</p>
              <p className="text-sm text-gray-600">Phone: {donor.phone}</p>
              <button className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                Contact Donor
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-3">No donors found.</p>
        )}
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
