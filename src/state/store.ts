import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

// Return Type that helps us to get all states and there types.
export type RootState = ReturnType<typeof store.getState>;

// Helps us to dispatch actions.
export type AppDispatch = typeof store.dispatch;
