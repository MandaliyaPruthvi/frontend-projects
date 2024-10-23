import {configureStore} from '@reduxjs/toolkit';
import counterSliceReducer from './counter-slice';

export const store = configureStore({
    reducer: {
        counter: counterSliceReducer
    }
});