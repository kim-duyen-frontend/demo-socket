import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: {
        currentUser: null,
        isLoading: false,
        error: false
    },
    register: {
        isLoading: false,
        error: false,
        success: false
    }
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginRequest: (state) => {
            state.login.isLoading = true;
        },
        loginSuccessfull: (state, action) => {
            state.login.isLoading = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginError: (state) => {
            state.login.isLoading = false;
            state.login.error = true;
        },
        registerRequest: (state) => {
            state.register.isLoading = true;
        },
        registerSuccess: (state) => {
            state.register.isLoading = false;
            state.register.error = false;
            state.register.success = true;
        },
        registerError: (state) => {
            state.register.isLoading = false;
            state.register.error = true;
            state.register.success = false;
        }
    }
})
export const { loginRequest, loginSuccessfull, loginError, registerRequest, registerSuccess, registerError } = authSlice.actions;
export default authSlice.reducer;