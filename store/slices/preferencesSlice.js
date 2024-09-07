import { createSlice } from "@reduxjs/toolkit";

const preferencesSlice = createSlice({
  name: "preferences",
  initialState: {
    alias: "",
    insurers: [],
  },
  reducers: {
    initializePreferences: (state, action) => {
      return {...state, ...action.payload}
    },
    setAlias: (state, action) => {
      state.alias = action.payload;
    },
    setInsurerSelection: (state, action) => {
      const { name, isSelected } = action.payload;
      state.insurers = state.insurers.map((insurer) => {
        if (insurer.name === name) insurer.isSelected = isSelected;

        return insurer;
      });
    },
  },
});

export const {
  initializePreferences,
  setAlias,
  setInsurerSelection
} = preferencesSlice.actions

export default preferencesSlice.reducer;
