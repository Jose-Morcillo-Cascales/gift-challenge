import { createSlice } from "@reduxjs/toolkit";
import { login, logout } from "./reducers";

export const userSlice = createSlice({
    name: 'userData',
    initialState: JSON.parse(sessionStorage.getItem('user'))
        ? { user: JSON.parse(sessionStorage.getItem('user')) }
        : { user: {} },
    reducers: {
        LOG_IN: login,
        LOG_OUT: logout,
    }
})

export const {
    LOG_IN,
    LOG_OUT
} = userSlice.actions;

export default userSlice.reducer;