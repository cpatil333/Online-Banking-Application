// AccountForm.jsx
import React, { useState } from "react";
import "../../src/Forms.css";

export const AccountForm = () => {
  const [formData, setFormData] = useState({
    userId: "",
    type: "Savings",
    balance: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Account Data:", formData);
    // Call API to create account
  };

  return (
    <div className="form-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <label>User ID</label>
        <input name="userId" value={formData.userId} onChange={handleChange} />

        <label>Account Type</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="Savings">Savings</option>
          <option value="Checking">Checking</option>
        </select>

        <label>Initial Balance</label>
        <input name="balance" value={formData.balance} onChange={handleChange} />

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};
