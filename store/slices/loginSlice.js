import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    mobileNumber: "",
    otp: "",
    otpError: false,
    otpVerified: false,
    loading: false,
    loadingMessage: "",
    pageNo: 1,
  },
  reducers: {
    setMobileNumber: (state, action) => {
      state.mobileNumber = action.payload;
    },
    showLoader: (state, action) => {
      state.loading = true;
      state.loadingMessage = action.payload;
    },
    setLoadingMessage: (state, action) => {
      state.loadingMessage = action.payload;
    },
    removeLoader: (state) => {
      state.loading = false;
      state.loadingMessage = "";
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
  showLoader,
  setLoadingMessage,
  removeLoader,
  setOtpError,
  setOtpVerified,
  gotoNextPage,
  gotoPrevPage,
} = loginSlice.actions;

export default loginSlice.reducer;
