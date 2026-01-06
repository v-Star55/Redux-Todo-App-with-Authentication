import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"; 
import authReducer from "../features/auth/authSlice";

// creating store for storing global state

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        auth:authReducer
    }
});