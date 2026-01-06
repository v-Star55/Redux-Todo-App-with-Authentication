import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo={
                id:nanoid(),
                text:action.payload.text,
                completed:false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        toggleTodo: (state, action) => {
              const todo = state.todos.find(t => t.id === action.payload.id);
              if (todo) todo.completed = !todo.completed;
        }
    }
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer

