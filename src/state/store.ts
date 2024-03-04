import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

// Return Type that helps us to get all states and there types.
export type RootState = ReturnType<typeof store.getState>;

// Helps us to dispatch actions.
export type AppDispatch = typeof store.dispatch;
