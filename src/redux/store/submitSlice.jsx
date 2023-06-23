import { createSlice } from "@reduxjs/toolkit";
export const submitSlice = createSlice({
  name: "submit",
  initialState: { formSubmit: false },

  reducers: {
    submit(state) {
      state.formSubmit = true;
    },
    continue(state) {
      state.formSubmit = false;
    },
  },
});

export const formSubmitActions = submitSlice.actions;
