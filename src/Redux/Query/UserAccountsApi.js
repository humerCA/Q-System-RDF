import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const userAccountsApi = createApi({
    reducerPath: 'userAccountsApi',
    
    // Q-API
    // baseQuery: fetchBaseQuery({baseUrl: " http://f3ff-111-125-108-32.ap.ngrok.io/api/admin"}),
    baseQuery: fetchBaseQuery({
        baseUrl: "http://10.10.10.4:8000/api/",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token')

            headers.set('Authorization', `Bearer ${token}`)
            return headers
        }
    }),
    endpoints: (builder) => ({
        getUserAccountsApi: builder.query ({
            query: (params) => `admin/user-accounts?search=${params.search}&page=${params.page}&limit=${params.limit}&status=${params.status}`,
            
        }),
        getUserTokenApi: builder.query ({
            query: (user) => '/login',
        })
        
    }),
})

export const { useGetUserAccountsApiQuery } = userAccountsApi