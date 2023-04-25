import { configureStore } from "@reduxjs/toolkit";
import taskListSlice from "./taskListSlice";
import loginSlice from "./loginSlice";

const store = configureStore({
    reducer:{
        task:taskListSlice.reducer,
        login:loginSlice.reducer
    }
});

export default store;