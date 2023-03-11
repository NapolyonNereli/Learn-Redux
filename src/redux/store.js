import { configureStore } from "@reduxjs/toolkit";
import counterReduce from "../counter/counterSlice";



export const store = configureStore({
    reducer: {
        counter: counterReduce        
    }
}) 