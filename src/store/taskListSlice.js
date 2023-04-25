import { createSlice } from "@reduxjs/toolkit";

const taskListSlice = createSlice({
    name:"todo",
    initialState:{items:[]},
    reducers:{
        addTask:(state,action)=>{
            state.items.push(action.payload);
        },
        removeTask:(state,action)=>{
            state.items = state.items.filter((item)=>{
                return item.id !== action.payload; 
            });
        },
        replace:(state,action)=>{
            state.items = action.payload;
        }
    }
});

export const taskListActions = taskListSlice.actions;
export default taskListSlice;
