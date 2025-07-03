import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const TicketDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/tickets/${id}`)
      .then((res) => {
        setTicket(res.data);
        setStatus(res.data.status);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleUpdate = () => {
    axios.patch(`http://localhost:5000/tickets/${id}`, { status })
      .then(() => {
        alert("Ticket updated successfully");
        navigate("/dashboard");
      })
      .catch((err) => console.error(err));
  };

  if (!ticket) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Ticket Details</h1>
      <div className="bg-white p-4 rounded shadow">
        <p><strong>Ticket No:</strong> {ticket.ticketNo}</p>
        <p><strong>Name:</strong> {ticket.name}</p>
        <p><strong>Department:</strong> {ticket.department}</p>
        <p><strong>Subject:</strong> {ticket.subject}</p>
        <p><strong>Category:</strong> {ticket.category}</p>
        <p><strong>Type:</strong> {ticket.type}</p>
        <p><strong>Priority:</strong> {ticket.priority}</p>
        <p><strong>Description:</strong> {ticket.description}</p>
        <div className="mt-4">
          <label className="block mb-2 font-medium">Status</label>
          <select
            value={status}
            onChange={handleStatusChange}
            className="border border-gray-300 rounded p-2 w-full"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>
        <button
          onClick={handleUpdate}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          Update Status
        </button>
      </div>
    </div>
  );
};

export default TicketDetailPage;
