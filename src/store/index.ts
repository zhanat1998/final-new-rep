import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./login/slice";
import { shopSlice } from "./shop/slice";
import { cartSlice } from "./cart/slice";

export const store = configureStore({
    reducer: {
        loginReducer: loginSlice.reducer,
        shopReducer: shopSlice.reducer,
        cartReducer: cartSlice.reducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch