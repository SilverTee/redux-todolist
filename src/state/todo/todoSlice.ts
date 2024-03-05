import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TodoState {
  id: number;
  title: string;
  completed: boolean;
}

const initialState: TodoState[] = [
  { id: 1, title: "Eat Salad", completed: false },
  { id: 2, title: "Go Jogging", completed: false },
  { id: 3, title: "Drink Red Bull", completed: true },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoState>) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo(state, action: PayloadAction<number>) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export default todoSlice.reducer;

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
