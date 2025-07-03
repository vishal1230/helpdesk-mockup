// src/pages/DashboardPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/tickets").then((res) => {
      setTickets(res.data);
    });
  }, []);

  // Calculate status counts
  const totalTickets = tickets.length;
  const totalSolved = tickets.filter((t) => t.status === "Resolved").length;
  const totalPending = tickets.filter((t) => t.status === "Pending").length;
  const totalInProgress = tickets.filter(
    (t) => t.status === "In Progress"
  ).length;

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center bg-teal-400 p-4">
        <h1 className="text-white text-2xl font-bold italic">Helpdesk</h1>
        <div className="space-x-4 flex items-center">
          <button
            onClick={() => navigate("/new-ticket")}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
          >
            + New Ticket
          </button>
          <button className="text-white">🔔</button>
          <button className="text-white">👤</button>
          <button
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Sidebar and Main */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-200 p-4">
          <nav className="space-y-2">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center w-full text-left px-2 py-1 hover:bg-gray-300 rounded"
            >
              📊 Dashboard
            </button>
            <button
              onClick={() => navigate("/new-ticket")}
              className="flex items-center w-full text-left px-2 py-1 hover:bg-gray-300 rounded"
            >
              📝 New Ticket
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-500 text-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">Total Tickets</h3>
              <p className="text-3xl">{totalTickets}</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">Resolved</h3>
              <p className="text-3xl">{totalSolved}</p>
            </div>
            <div className="bg-yellow-500 text-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">In Progress</h3>
              <p className="text-3xl">{totalInProgress}</p>
            </div>
            <div className="bg-red-500 text-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">Pending</h3>
              <p className="text-3xl">{totalPending}</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Recent Tickets</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded shadow">
                <thead>
                  <tr>
                    <th className="text-left px-4 py-2 border">Ticket No.</th>
                    <th className="text-left px-4 py-2 border">Subject</th>
                    <th className="text-left px-4 py-2 border">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket) => (
                    <tr key={ticket.id}>
                      <td className="px-4 py-2 border">{ticket.ticketNo}</td>
                      <td className="px-4 py-2 border">{ticket.subject}</td>
                      <td className="px-4 py-2 border">
                        <span
                          className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                            ticket.status === "Resolved"
                              ? "bg-green-200 text-green-800"
                              : ticket.status === "In Progress"
                              ? "bg-yellow-200 text-yellow-800"
                              : "bg-red-200 text-red-800"
                          }`}
                        >
                          {ticket.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-teal-400 text-white text-center py-2">
        Footer Area
      </footer>
    </div>
  );
};

export default DashboardPage;
