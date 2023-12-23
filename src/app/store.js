import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../feauters/todo/todoSlice'


export const store = configureStore({
    reducer: todoReducer
})