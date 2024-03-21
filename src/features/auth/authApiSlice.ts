import {apiSlice} from "../../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth/signin',
                method: 'POST',
                body: {...credentials}
            }),
        }),
        registration: builder.mutation({
            query: credentials => ({
                url: '/auth/signup',
                method: 'POST',
                body: {...credentials}
            }),
        }),
        // необоходиимо вынести мутации в другие слайсы
        createTask: builder.mutation({
            query: credentials => ({
                url: `/tasks`,
                method: 'POST',
                body: {...credentials}
            })
        }),
        getTasks: builder.mutation({
            query: (credentials = 'PENDING') => ({
                url: `/tasks?page=0&sort=asc&size=10&filter=${credentials}`,
                method: 'GET',
            })
        }),
        getTaskById: builder.mutation({
            query: (credentials) => ({
                url: `/tasks/${credentials}`,
                method: 'GET',
            })
        }),
        deleteTask: builder.mutation({
            query: (credentials) => ({
                url: `/tasks/${credentials}`,
                method: 'DELETE',
            })
        })
    })
})

// @ts-ignore
export const {
    useLoginMutation,
    useRegistrationMutation,
    useGetTasksMutation,
    useGetTaskByIdMutation,
    useCreateTaskMutation,
    useDeleteTaskMutation
} = authApiSlice;