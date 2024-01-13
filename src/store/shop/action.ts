import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api";
import { Product, Prod } from "./utils";
export type withNavigate = Product & {
    navigate: (path: string) => void
}
export const getProductsAction = createAsyncThunk<Product[], undefined, { rejectValue: string }>(
    'product/getProductsAction',
    async (_, thunkAPI) => {
        try {
            const response = await axiosInstance.get('product/');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка');
        }

    }
);

export const createProductAction = createAsyncThunk<undefined, withNavigate, { rejectValue: string }>(
    'product/createProductsAction',
    async ({ navigate, ...data }, thunkAPI) => {
        try {
            await axiosInstance.post('/product/', data);
            navigate('/');
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при добавлении фото');
        }

    }
);

export const deleteProductsAction = createAsyncThunk<Product, number | string, { rejectValue: string }>(
    'product/deleteProductsAction',
    async (id, thunkAPI) => {
        try {
            return await axiosInstance.delete(`/product/${id}`);
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при удалении');
        }

    }
);
export const getProdAction = createAsyncThunk<Product, number | string, { rejectValue: string }>(
    'product/getProdAction',
    async (id, thunkAPI) => {
        try {
            const response = await axiosInstance.get(`/product/${id}`);

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при получении данных для обнавлении');
        }

    }
);
export const updateProdAction = createAsyncThunk<undefined, withNavigate, { rejectValue: string }>(
    'product/updateProdAction',
    async ({ navigate, ...data }, thunkAPI) => {
        try {
            const response = await axiosInstance.put(`/product/${data.id}/`, data);
            navigate('/')
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при обнавлении');
        }

    }
);
export const readProductAction = createAsyncThunk<Prod, string, { rejectValue: string }>(
    'product/readProductAction',
    async (id, thunkAPI) => {
        try {
            const response = await axiosInstance.get(`/product/${id}/`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при получении данных для read product on big screen');
        }

    }
);
export const getCartAction = createAsyncThunk<Product, undefined, { rejectValue: string }>(
    'product/getCartAction',
    async (_, thunkAPI) => {
        try {
            const response = await axiosInstance.get('/get-cart/');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при получении карзину');
        }

    }
);
export const postCartAction = createAsyncThunk<undefined, withNavigate, { rejectValue: string }>(
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
export const removeFromCartAction = createAsyncThunk<undefined, string, { rejectValue: string }>(
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