import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginAction, registerAction } from "./action";
interface initData {
    error: string | undefined;
    isLoad: boolean;
}
const initialState: initData = { error: '', isLoad: false }
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerAction.fulfilled, (state, action) => {
            state.isLoad = false;
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