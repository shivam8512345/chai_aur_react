import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";
// we created a store.

export const store = configureStore({
  reducer: todoReducer,
});
