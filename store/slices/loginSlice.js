import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    mobileNumber: "",
    otp: "",
    otpError: false,
    otpVerified: false,
    otpLoading: false,
    pageNo: 1,
  },
  reducers: {
    setMobileNumber: (state, action) => {
      state.mobileNumber = action.payload;
    },
    setOtpLoading: (state, action) => {
      state.otpLoading = action.payload;
    },
    setOtpError: (state, action) => {
      state.otpError = action.payload;
    },
    setOtpVerified: (state, action) => {
      state.otpVerified = !!action.payload;
    },
    gotoNextPage: (state) => {
      state.pageNo = ++state.pageNo;
    },
    gotoPrevPage: (state) => {
      state.pageNo = --state.pageNo;
    },
  },
});

export const {
  setMobileNumber,
  setOtpLoading,
  setOtpError,
  setOtpVerified,
  gotoNextPage,
  gotoPrevPage,
} = loginSlice.actions;

export default loginSlice.reducer;
