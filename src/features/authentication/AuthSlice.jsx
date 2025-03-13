import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  isAuthenticated: localStorage.getItem("token") !== null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthunticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
  },
});

export const { setIsAuthunticated, setUserInfo } = AuthSlice.actions;

export default AuthSlice.reducer;
