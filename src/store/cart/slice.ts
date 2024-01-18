import { createSlice } from "@reduxjs/toolkit";
import { initialState } from ".";
import { getCartAction } from "./action";

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCartAction.fulfilled, (state, action) => {
            state.isLoad = false;
            state.data = action.payload;
        });
        builder.addCase(getCartAction.pending, (state) => {
            state.isLoad = true;
        });
        builder.addCase(getCartAction.rejected, (state, action) => {
            state.isLoad = false;
            state.error = action.payload as string;
        });

    }
})