import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {logOut, setCredentials} from "../features/auth/authSlice";
const baseQuery = fetchBaseQuery({
    baseUrl: 'http://169.155.57.78/v1/',
    credentials: 'same-origin',
    prepareHeaders: (headers, {getState}) => {
        // @ts-ignore
        const token = getState().auth.token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    }
})
// Reauth interceptor
const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result?.error?.status === 401) {
        const refreshToken = localStorage.getItem('refreshToken')
        const refreshResult = await baseQuery({url: 'auth/refresh', method: 'POST', body: {refreshToken}}, api, extraOptions);
        if (refreshResult?.data) {
            const user = api.getState().auth.user;
            api.dispatch(setCredentials({...refreshResult.data, user}))
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut());
        }
    }
    return result;
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({})
})