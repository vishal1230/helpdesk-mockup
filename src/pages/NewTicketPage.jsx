import React, { useState } from "react";

const NewTicketPage = () => {
  const [formData, setFormData] = useState({
    ticketNo: "",
    date: "",
    name: "",
    department: "",
    subject: "",
    category: "",
    description: "",
    type: "",
    priority: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // All fields are required via `required` attribute, so this only runs if all filled.
    fetch("http://localhost:5000/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then(() => {
        alert("Ticket submitted successfully!");
        setFormData({
          ticketNo: "",
          date: "",
          name: "",
          department: "",
          subject: "",
          category: "",
          description: "",
          type: "",
          priority: ""
        });
      })
      .catch((err) => console.error("Error submitting ticket:", err));
  };

  return (
    <div className="min-h-screen flex flex-col bg-teal-300">
      {/* Header */}
      <div className="bg-teal-500 p-4 text-white text-2xl italic font-bold">Helpdesk</div>

      {/* Main Form */}
      <div className="flex-grow flex items-center justify-center p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-teal-100 p-6 rounded shadow-lg w-full max-w-3xl"
        >
          <h2 className="text-center text-xl mb-4 font-semibold">Create New Ticket</h2>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label>Ticket No.</label>
              <input
                type="text"
                name="ticketNo"
                value={formData.ticketNo}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded px-2 py-1"
                required
              />
            </div>
            <div>
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded px-2 py-1"
                required
              />
            </div>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded px-2 py-1"
                required
              />
            </div>
            <div>
              <label>Department</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded px-2 py-1"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-2 py-1"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded px-2 py-1"
                required
              />
            </div>
            <div>
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded px-2 py-1 h-24"
                required
              />
            </div>
            <div>
              <label>Type</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded px-2 py-1"
                required
              />
            </div>
            <div>
              <label>Priority</label>
              <input
                type="text"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded px-2 py-1"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input type="checkbox" required className="mr-2" />
              <span>I'm not a robot</span>
            </div>
            <button
              type="submit"
              className="bg-teal-400 hover:bg-teal-500 text-white font-semibold py-2 px-6 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-teal-500 text-white text-center py-2">Footer Area</footer>
    </div>
  );
};

export default NewTicketPage;
