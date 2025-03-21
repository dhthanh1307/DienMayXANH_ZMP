import { combineReducers } from "redux";

import cartReducer from "./slices/cartSlice";
import informationReducer from "./slices/informationSlice"
import locationReducer from "./slices/locationSlice"
import productReducer from "./slices/productSlice";
import showmoreReducer from "./slices/showmoreSlice";
export const rootReducer = combineReducers({
    cart: cartReducer,
    products:productReducer,
    location:locationReducer,
    showmore:showmoreReducer,
    information: informationReducer,
});
