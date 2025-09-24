// TransactionForm.jsx
import React, { useState } from "react";
import "../../src/Forms.css";

export const TransactionForm = () => {
  const [formData, setFormData] = useState({
    accountId: "",
    type: "Deposit",
    amount: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transaction Data:", formData);
    // Call API to create transaction
  };

  return (
    <div className="form-container">
      <h2>New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>Account ID</label>
        <input name="accountId" value={formData.accountId} onChange={handleChange} />

        <label>Type</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="Deposit">Deposit</option>
          <option value="Withdrawal">Withdrawal</option>
        </select>

        <label>Amount</label>
        <input name="amount" value={formData.amount} onChange={handleChange} />

        <label>Note</label>
        <input name="note" value={formData.note} onChange={handleChange} />

        <button type="submit">Submit Transaction</button>
      </form>
    </div>
  );
};
