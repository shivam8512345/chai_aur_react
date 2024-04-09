import { createSlice, nanoid } from "@reduxjs/toolkit";

// we creating a reducer
// nanoid is generating different ids.

// how the store looks like
const initialState = {
  // todos state.
  todos: [{ id: 1, text: "Helo world" }],
};

//this is not the right way to export todoSlice.
export const todoSlice = createSlice({
  name: "todo",
  // each slice have their own initialState.
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      // now we are updating the intial state
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
  },
});

// in there is change occurs with context api's,we each time declaring the function but not its definition,but inside the redux toolkit, we do not write its declartion ,we write its definition.
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
