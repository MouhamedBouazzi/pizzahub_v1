// register

import {
    FAIL,
    GET_CURRENT,
    LOADING,
    LOGIN,
    LOGOUT,
    REGISTER,
} from "../actionTypes/userActionType";
import axios from "axios";
import { Navigate } from "react-router-dom";
export const register = (newUser, navigate) => async(dispatch) => {
    dispatch({ type: LOADING });
    try {
        const res = await axios.post("/api/users/register", newUser);
        dispatch({ type: REGISTER, payload: res.data });
        navigate("/profile");
    } catch (error) {
        dispatch({ type: FAIL, payload: error.response.data });
    }
};

// login

export const login = (user, navigate) => async(dispatch) => {
    dispatch({ type: LOADING });
    try {
        const res = await axios.post("/api/users/login", user);
        dispatch({ type: LOGIN, payload: res.data });
        navigate("/profile");
    } catch (error) {
        dispatch({ type: FAIL, payload: error.response.data });
    }
};

// get current

export const getCurrent = () => async(dispatch) => {
    const config = {
        headers: {
            authentification: localStorage.getItem("tooken"),
        },
    };
    try {
        const res = await axios.get("/api/users/current", config);
        dispatch({ type: GET_CURRENT, payload: res.data });
    } catch (error) {
        dispatch({ type: FAIL, payload: error.response.data });
    }
};
// logout

export const logout = () => ({ type: LOGOUT });