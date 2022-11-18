import axios from "axios";
import { loginError, loginRequest, loginSuccessfull, registerError, registerRequest, registerSuccess } from "./authSlice";

export const loginUser = async (user, dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await axios.post("http://localhost:5000/api/auth/login", user);
        dispatch(loginSuccessfull(response.data));
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