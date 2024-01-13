import { createSlice } from "@reduxjs/toolkit";
import { getProdAction, getProductsAction } from "./action";
import { initialState } from "./utils";
export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductsAction.fulfilled, (state, action) => {
            state.isLoad = false;
            state.products = action.payload;
        });
        builder.addCase(getProductsAction.rejected, (state, action) => {
            state.isLoad = false;
            state.error = action.payload as string;
        });
        builder.addCase(getProductsAction.pending, (state) => {
            state.isLoad = true;
        });
        builder.addCase(getProdAction.fulfilled, (state, action) => {
            state.isLoad = false;
            state.product = action.payload;
        });
        builder.addCase(getProdAction.rejected, (state, action) => {
            state.isLoad = false;
            state.error = action.payload as string;
        });
        builder.addCase(getProdAction.pending, (state) => {
            state.isLoad = true;
        });
    }
});