import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "@store/cartReducer";
import locationReducer from "@store/locationReducer";
import productReducer from "@store/productReducer";
import showmoreReducer from "@store/showmoreReducer";
export const store =configureStore({
    reducer: {
        products: productReducer,
        showmore: showmoreReducer,
        location: locationReducer,
        cart: cartReducer,
    },
});

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch;