import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    // MockAPI
    baseQuery: fetchBaseQuery({baseUrl: "https://6386b780d9b24b1be3dce45b.mockapi.io/Q-API/"}),
    
    endpoints: (builder) => ({
        getUserAccounts: builder.query ({
            query: () => `UserAccounts/`,
            
        }),
        getUserAccount: builder.query({
            query: (id) => `UserAccounts/${id}`
        })
    }),
})

export const { useGetUserAccountsQuery, useGetUserAccountQuery } = usersApi