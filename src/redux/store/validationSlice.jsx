import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: {
    nameError: "",
    numberError: "",
    monthError: "",
    yearError: "",
    cvcError: "",
  },
  errorState: {
    nameState: true,
    numberState: true,
    monthState: true,
    yearState: true,
    cvcState: true,
  },
};

export const validationSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {
    setNameState: (state) => {
      state.errorState.nameState = true;
      state.message.nameError = "Please enter a valid name";
    },
    setNameError: (state) => {
      state.errorState.nameState = false;
    },
    setNumberState: (state) => {
      state.errorState.numberState = true;
      state.message.numberError = "Please enter valid card details";
    },
    setNumberError: (state) => {
      state.errorState.numberState = false;
    },
    setMonthState: (state) => {
      state.errorState.monthState = true;
      state.message.monthError = `Enter a valid date`;
    },
    setMonthError: (state) => {
      state.errorState.monthState = false;
    },
    setYearState: (state) => {
      state.errorState.yearState = true;
      state.message.yearError = "Enter a valid year";
    },
    setYearError: (state) => {
      state.errorState.yearState = false;
    },
    setCVCState: (state) => {
      state.message.cvcError = "Invalid cvc number";
      state.errorState.cvcState = true;
    },
    setCVCError: (state) => {
      state.errorState.cvcState = false;
    },
  },
});

export const validationActions = validationSlice.actions;
