import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        userLogin: null,
        isLoading: false,
        error: false
    }
}
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        getUserRequest: (state) => {
            state.user.isLoading = true;
        },
        getUserSuccessfull: (state, action) => {
            state.user.isLoading = false;
            state.user.userLogin = action.payload;
            state.user.error = false;
        },
        getUserError: (state) => {
            state.user.isLoading = false;
            state.user.error = true;
        }
    }
})
export const {getUserRequest, getUserSuccessfull, getUserError} = userSlice.actions;
export default userSlice.reducer;