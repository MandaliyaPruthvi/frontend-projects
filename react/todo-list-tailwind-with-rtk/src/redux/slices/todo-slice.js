import { createSlice, current } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    editTodo: (state, action) => {
      state.forEach((element) => {
        if (element.id === action.payload.id) {
          element.description = action.payload.description;
        }
      });
    },
    deleteTodo: (state, action) => {
        // this is not working since we are replacing the state directly inside the reducer
      //   const remainingTodoList = state.filter((element) => {
      //     return element.id !== action.payload.id;
      //   });
      //   state = remainingTodoList;

      //   const index = state.findIndex(
      //     (element) => element.id === action.payload.id
      //   );
      //   if (index !== -1) {
      //     state.splice(index, 1); // Mutate the state directly
      //   }

      return state.filter((element) => element.id !== action.payload.id);
    },
  },
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
