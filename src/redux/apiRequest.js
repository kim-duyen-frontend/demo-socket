import axios from "axios";
import { loginError, loginRequest, loginSuccessfull, registerError, registerRequest, registerSuccess } from "./authSlice";
import { getUserError, getUserRequest, getUserSuccessfull } from "./userSlice";

export const loginUser = async (user, dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await axios.post("http://localhost:5000/api/auth/login", user);
        dispatch(loginSuccessfull(response.data));
        // console.log("check data 1: ", response);
    } catch (error) {
        dispatch(loginError());
    }
}
export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerRequest());
    try {
        await axios.post("http://localhost:5000/api/auth/register", user);
        dispatch(registerSuccess());
        navigate("/");
    } catch (error) {
        dispatch(registerError());
    }
}

export const getUserLogin = async (accessToken, dispatch) => {
    dispatch(getUserRequest());
    try {
        const response = await axios.get("http://localhost:5000/api/user", {
            headers: { authorization: `Bearer ${accessToken}` }
        });
        // console.log("check data 2: ", response.data);
        dispatch(getUserSuccessfull(response.data));
    } catch (error) {
        dispatch(getUserError());
    }
}