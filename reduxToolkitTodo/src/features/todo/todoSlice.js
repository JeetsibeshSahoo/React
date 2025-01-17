import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{id: 1, text: "Godzilla"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {         // in reducer properties and function are present
        addTodo: (state, action) => {     // when you create function in reducer it gives 2 things state and action
            const todo = {                // In state you get current state of state and In action you get data
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },   
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const update = state.todos.filter((todo) => {
                if(todo.id === action.payload) {
                    text: action.payload
                }
            })
        }
    }
});

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer