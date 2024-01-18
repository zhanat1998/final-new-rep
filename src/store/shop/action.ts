import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api";
import { Product, Prod } from "./typeShop";
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
