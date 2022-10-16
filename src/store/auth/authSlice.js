import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', //'authenticated','not-authenticated'
        user: {},
        errorMessage: ""

    },
    reducers: {
        onLogin: (state, { payload }) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = "";

        },
        onLogout:(state,{payload})=>{
            state.status = 'not-authenticated',
            state.user = {},
            state.errorMessage =payload;
        },
        onChecking: (state) => {            
            state.status = 'checking',
            state.user = {},
            state.errorMessage = "";
        },
        clearErrorMessages:(state)=>{
            state.errorMessage = "";
        }
    }
});
export const { onChecking, onLogin,onLogout ,clearErrorMessages} = authSlice.actions;