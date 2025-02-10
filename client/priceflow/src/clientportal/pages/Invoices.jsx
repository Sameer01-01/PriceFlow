import React, { useState } from "react";

const Invoices = ({ setInvoiceData, navigate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    date: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInvoiceData(formData);
    navigate("/client/invoice-form");
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">Create Invoice</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="p-2 border rounded" required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-2 border rounded" required />
        <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} className="p-2 border rounded" required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="p-2 border rounded" required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Generate Invoice</button>
      </form>
    </div>
  );
};

export default Invoices;
