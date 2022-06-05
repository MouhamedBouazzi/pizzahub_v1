import { combineReducers } from "redux";
import userReducer from "./userReducer";
import getAllPizzasReducer from "./pizzaReducers"
import cartReducer from "./cartReducer";
import { getUserOrdersReducer, placeOrderReducer } from "./orderReducer";


export const rootReducer = combineReducers({
    userReducer: userReducer,
    getAllPizzasReducer: getAllPizzasReducer,
    cartReducer: cartReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer: getUserOrdersReducer,
});






// export default cartItems