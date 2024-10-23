import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './redux/slices/todo';

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})