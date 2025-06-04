import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from './todoTypes';

const initialState: Todo[] = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    clearCompleted: (state) => {
      return state.filter(todo => !todo.completed);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;