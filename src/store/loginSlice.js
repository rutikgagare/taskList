import { createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";

const loginSlice = createSlice({
    name:"login",
    initialState:{isLogedIn:false},
    reducers:{
        setLogedIn:(state)=>{
            state.isLogedIn = true;
        },
        setLogout:(state)=>{
            state.isLogedIn = false;
        }
    }
});


export const loginActions = loginSlice.actions;
export default loginSlice;