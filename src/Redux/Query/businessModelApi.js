import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const businessModelApi = createApi({
    reducerPath: 'businessModelApi',
    // baseQuerry: fetchBaseQuerry({baseUrl: "http://10.10.10.4:8000/api"}),
    // baseQuery: fetchBaseQuery({baseUrl: "https://6386b780d9b24b1be3dce45b.mockapi.io/Q-API/"}),
    endpoints: (builder) => ({
        getBusinessModel: builder.query ({
            query: () => `BusinessModel/`,
            
        }),
        getBusinessModelId : builder.query({
            query: (id) => `BusinessModel/${id}`
        })
    }),
})

export const { useGetBusinessModelQuery, useGetBusinessModelIdQuery } = businessModelApi