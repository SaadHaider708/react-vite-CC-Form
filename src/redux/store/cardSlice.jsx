import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    number: "0000 0000 0000 0000",
    name: "YOUR NAME",
    month: "MM",
    year: "YY",
    cvc: "000",
  },
  reducers: {
    number(state, action) {
      state.number = action.payload;
    },
    name(state, action) {
      state.name = action.payload;
    },
    month(state, action) {
      state.month = action.payload;
    },
    year(state, action) {
      state.year = action.payload;
    },
    cvc(state, action) {
      state.cvc = action.payload;
    },
  },
});

export const cardActions = cardSlice.actions;
