import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './redux/slices/todo-slice';

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
});