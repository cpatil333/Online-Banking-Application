import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      user = localStorage.setItem("user", action.payload.user);
      token = localStorage.setItem(
        "token",
        JSON.stringify(action.payload.token)
      );
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      user = localStorage.removeItem("user");
      token = localStorage.removeItem("token");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
