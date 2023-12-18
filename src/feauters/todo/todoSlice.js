import {createSlice, nanoid} from '@reduxjs/toolkit';

const intialState = {
    todos: [{id: 1, text : "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        
    }
})