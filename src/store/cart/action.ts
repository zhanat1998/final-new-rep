import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api";
import { withNavigate } from "../shop/action";
import { CartItem, CartRequest } from ".";

export const getCartAction = createAsyncThunk<CartItem[], undefined, { rejectValue: string }>(
    'product/getCartAction',
    async (_, thunkAPI) => {
        try {
            const response = await axiosInstance.get('/get-cart/');
            return response.data.cart;
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при получении карзину');
        }

    }
);
export const postCartAction = createAsyncThunk<undefined, CartRequest, { rejectValue: string }>(
    'product/postCartAction',
    async ({ navigate, ...data }, thunkAPI) => {
        try {
            await axiosInstance.post('/add-cart/', data);
            navigate('/');
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при добавлении в карзину');
        }

    }
);
export const removeFromCartAction = createAsyncThunk<undefined, number | string, { rejectValue: string }>(
    'product/removeFromCartAction',
    async (product_id, thunkAPI) => {
        try {
            await axiosInstance.delete(`/remove-from-cart/${product_id}`);
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при удалении korzina');
        }

    }
);
export const removeAllCartAction = createAsyncThunk<undefined, undefined, { rejectValue: string }>(
    'product/removeAllCartAction',
    async (_, thunkAPI) => {
        try {
            await axiosInstance.delete('/remove-all/ ');
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при удалении all korzina');
        }

    }
);