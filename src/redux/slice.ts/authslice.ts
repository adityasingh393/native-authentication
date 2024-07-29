import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MMKV } from 'react-native-mmkv';
import { User } from '../../utlis/interfaces';
import { AuthState } from '../../utlis/interfaces';
const storage = new MMKV();

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signup: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            storage.set('user', JSON.stringify(action.payload));
        },
        loginSuccess: (state, action: PayloadAction<User>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        loginFailure: (state) => {
            state.isAuthenticated = false;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
        checkAuth: (state) => {
            const userString = storage.getString('user');
            if (userString) {
                const user = JSON.parse(userString);
                state.user = user;
            }
        },
    },
});

export const { signup, loginSuccess, loginFailure, logout, checkAuth } = authSlice.actions;
export default authSlice.reducer;
