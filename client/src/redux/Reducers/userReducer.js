import {
    FAIL,
    GET_CURRENT,
    LOADING,
    LOGIN,
    LOGOUT,
    REGISTER,
} from "../actionTypes/userActionType";

const initialState = {
    user: null,
    load: true,
    auth: false,
    errors: [],
};

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FAIL:
            return {
                ...state,
                errors: payload.errors,
            };
        case REGISTER:
            localStorage.setItem("tooken", payload.tooken);
            return {
                ...state,
                user: payload.newUser,
                auth: true,
                load: false,
            };
        case LOGIN:
            localStorage.setItem("tooken", payload.tooken);
            return {
                ...state,
                user: payload.foundUser,
                auth: true,
                load: false,
            };
        case LOADING:
            return {
                ...state,
                load: true,
            };
        case GET_CURRENT:
            return {
                ...state,
                user: payload.user,
                auth: true,
            };
        case LOGOUT:
            localStorage.removeItem("tooken");
            return {
                ...state,
                load: false,
                user: null,
            };

        default:
            return state;
    }
};

export default userReducer;