import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: localStorage.getItem('accessToken') ?? null,
    refresh: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const {userName, accessToken, refreshToken} = action.payload;
            state.user = userName;
            state.token = accessToken;
            state.refresh = refreshToken;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
        },
        logOut: (state) => {
            state.user = null;
            state.token = null;
            state.refresh = null;
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
        }
    }
})

export const {setCredentials, logOut} = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: any) => state.auth.user;
export const selectCurrentToken = (state: any) => state.auth.token;

export const selectCurrentRefresh = (state: any) => state.auth.refresh;