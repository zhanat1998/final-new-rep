import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginAction, registerAction } from "./action";
interface initData {
    error: string | undefined;
    isLoad: boolean;
    token: string | null | undefined;
}
const token = localStorage.getItem('token')
const initialState: initData = { error: '', isLoad: false, token: '' || token }
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout(state) {
            localStorage.removeItem('token');
            state.token = '';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerAction.fulfilled, (state, action) => {
            state.isLoad = false;
            state.token = action.payload;
        });
        builder.addCase(registerAction.rejected, (state, action) => {
            state.isLoad = false;
            state.error = action.payload;
        });
        builder.addCase(registerAction.pending, (state) => {
            state.isLoad = true;
        });

        builder.addCase(loginAction.fulfilled, (state, action) => {
            state.isLoad = false;
            state.token = action.payload;
        });
        builder.addCase(loginAction.rejected, (state, action) => {
            state.isLoad = false;
            state.error = action.payload;
        });
        builder.addCase(loginAction.pending, (state) => {
            state.isLoad = true;
        });
    }
});
export const { logout } = loginSlice.actions;