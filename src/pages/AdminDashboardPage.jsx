import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboardPage = () => {
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/tickets").then((res) => setTickets(res.data));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="p-8">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Admin - All Tickets</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
      <ul>
        {tickets.map((ticket) => (
          <li
            key={ticket.id}
            className="border p-4 mb-2 flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{ticket.title}</h3>
              <p>{ticket.description}</p>
            </div>
            <span
              className={`px-2 py-1 rounded text-sm ${
                ticket.status === "Resolved"
                  ? "bg-green-200 text-green-800"
                  : "bg-yellow-200 text-yellow-800"
              }`}
            >
              {ticket.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboardPage;
