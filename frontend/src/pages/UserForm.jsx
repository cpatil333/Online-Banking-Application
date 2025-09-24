import React, { useState } from "react";
import "../../src/Forms.css";
import { useMutation } from "@apollo/client";
import { USER_REGISTER } from "../apollo/Mutation";

export const UserForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "select",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [register] = useMutation(USER_REGISTER);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.role === "select") {
        alert("Select Role");
        return;
      }
      let uploadFileName = "";
      if (selectedFile) {
        const fileData = new FormData();
        fileData.append("imageUrl", selectedFile);

        try {
          const response = await fetch("http://localhost:4000/uploads", {
            method: "POST",
            body: fileData,
          });

          const contentType = response.headers.get("content-type") || "";

          if (!contentType.includes("application/json")) {
            const text = await response.text();
            throw new Error("Server return non-JSON", text);
          }
          const result = await response.json();
          uploadFileName = result.filename;
        } catch (error) {
          console.log("Uploaded file error ", error.message);
          return;
        }
      }
      const { data } = await register({
        variables: {
          input: {
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
            role: formData.role,
            imageUrl: uploadFileName,
          },
        },
      });
      if (data?.register) {
        alert("User data saved!");
        setFormData({ fullName: "", email: "", password: "", role: "select" });
      } else {
        alert("User data failed !");
        return;
      }
    } catch (error) {
      console.error("User register data error ", error.message);
      alert("User Register failed, please check data!");
    }
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
        <input
          type="file"
          name="imageUrl"
          placeholder="Select images"
          onChange={handleSelectInput}
        />
        <select name="role" onChange={handleChange}>
          <option value="select">Select Role</option>
          <option value="ADMIN">Admin</option>
          <option value="USER">User</option>
        </select>

        <button type="submit">Create User</button>
      </form>
    </div>
  );
};
