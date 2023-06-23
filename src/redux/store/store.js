import { configureStore } from "@reduxjs/toolkit";
import { validationSlice } from "./validationSlice";
import { cardSlice } from "./cardSlice";
import { submitSlice } from "./submitSlice";

const store = configureStore({
  reducer: {
    card: cardSlice.reducer,
    input: validationSlice.reducer,
    submit: submitSlice.reducer,
  },
});

export default store;
