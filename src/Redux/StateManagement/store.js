import {configureStore} from '@reduxjs/toolkit'

// import userApi from '../Querry/apiSlice'

import {usersApi} from '../Query/apiSlice'
// import {businessModelApi} from '../Query/businessModelApi'
import { userAccountsApi } from '../Query/UserAccountsApi'

import { setupListeners } from '@reduxjs/toolkit/query'

export const store =  configureStore({
    reducer: {
        // userLogin: userLoginReducer,
        // [usersApi.reducerPath]: usersApi.reducer,
        // [businessModelApi.reducerPath]: businessModelApi.reducer,
        [userAccountsApi.reducerPath]: userAccountsApi.reducer

    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([usersApi.middleware, userAccountsApi.middleware]),
})

setupListeners(store.dispatch)