import { createSlice } from "@reduxjs/toolkit";
import { getProdAction, getProductsAction } from "./action";
import { initialState } from "./typeShop";
export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        search(state, action) {
            const result = state.all.filter(product => product.title.toLocaleLowerCase().includes(action.payload));
            state.products = result;
        },
        sortByPrice(state) {
            const result = state.products.sort((p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0);
            state.products = result;
        },
        sortNew(state) {
            const result = state.products.sort((p1, p2) => (p1.id < p2.id) ? 1 : (p1.id > p2.id) ? -1 : 0);
            state.products = result;
        },
        sortOld(state) {
            const result = state.products.sort((p1, p2) => (p1.id > p2.id) ? 1 : (p1.id < p2.id) ? -1 : 0);
            state.products = result;
        },
        reset(state) {
            state.products = state.all;
        },
        changeProductImage(state, action) {
            state.product.image = action.payload;
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getProductsAction.fulfilled, (state, action) => {
            state.isLoad = false;
            state.products = action.payload;
            state.all = action.payload;
        });
        builder.addCase(getProductsAction.rejected, (state, action) => {
            state.isLoad = false;
            state.error = action.payload as string;
            state.products = [];
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
export const { sortByPrice, sortNew, sortOld, search, reset, changeProductImage } = shopSlice.actions; 