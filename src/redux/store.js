import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        userLogging: userSlice
    }
})
export default store;