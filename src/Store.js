import {configureStore} from '@reduxjs/toolkit'
import userReducer from './Slices/Userslice'
export const Store=configureStore({
    reducer:{
        user:userReducer
    }
})