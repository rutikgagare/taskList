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
        },
        updateTask:(state,action)=>{
            state.items = state.items.map((item)=>{
                if(item.id === action.payload.id){
                    return {id:item.id,text:action.payload.text,deadline:item.deadline,status:item.status};
                }
                else{
                    return item;
                }
            });
        },
        updateStatus:(state,action)=>{
            state.items = state.items.map((item)=>{
                if(item.id === action.payload.id){
                    return {id:item.id,text:item.text,deadline:item.deadline,status:action.payload.status};
                }
                else{
                    return item;
                }
            });
        }
    }
});

export const taskListActions = taskListSlice.actions;
export default taskListSlice;
