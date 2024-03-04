import { createSlice } from "@reduxjs/toolkit";

interface TodoState {
  id: number;
  title: string;
  completed: boolean;
}

const initialState: TodoState[] = [
  { id: 1, title: "todo1", completed: false },
  { id: 2, title: "todo2", completed: false },
  { id: 3, title: "todo3", completed: false },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export default todoSlice.reducer;

export const { addTodo, deleteTodo } = todoSlice.actions;
