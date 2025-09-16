import React, { useState } from "react";
import "../../src/Forms.css";

export const UserForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSelectInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    // You’d call your API to create a user here
  };

  return (
    <div className="form-container">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <select name="role" onChange={handleChange}>
          <option value="select">Select Role</option>
          <option value="ADMIN">Admin</option>
          <option value="USER">User</option>
        </select>
        <input
          type="file"
          name="imageUrl"
          placeholder="Select images"
          onChange={handleSelectInput}
        />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};
