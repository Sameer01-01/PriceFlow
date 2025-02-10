import React from "react";

const InvoiceForm = ({ invoiceData }) => {
  const handlePrint = () => {
    window.print();
  };

  if (!invoiceData) {
    return <p className="p-5 text-red-500">No invoice data available. Please fill out the invoice form first.</p>;
  }

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">Invoice Details</h2>
      <div className="border p-5 mt-4">
        <p><strong>Name:</strong> {invoiceData.name}</p>
        <p><strong>Email:</strong> {invoiceData.email}</p>
        <p><strong>Amount:</strong> ${invoiceData.amount}</p>
        <p><strong>Date:</strong> {invoiceData.date}</p>
      </div>
      <button onClick={handlePrint} className="bg-green-500 text-white p-2 mt-4 rounded">Print Invoice</button>
    </div>
  );
};

export default InvoiceForm;
