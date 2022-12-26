import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export const userlogin=createAsyncThunk('loginuser',async(loginuserdata,thunkapi)=>{
    let response=await axios.post('/user/login',loginuserdata)
    if(response.data.message==='Invalid User' || response.data.message==='Invalid password'){
        return thunkapi.rejectWithValue(response.data)
    }
    else{
        localStorage.setItem("token",response.data.payload)
        return response.data.userobj
    }
})
let userSlice=createSlice({
    name:'user',
    initialState:{
        userobj:{},
        iserror:false,
        issuccess:false,
        isloading:false,
        errmsg:''
    },
    reducers:{
        clearloginstatus:(state)=>{
            state.userobj=null
            state.issuccess=false
            state.iserror=false
            state.errmsg=''
            return state
        }
    },
    extraReducers:{
        [userlogin.pending]:(state,action)=>{
            state.isloading=true
        },
        [userlogin.fulfilled]:(state,action)=>{
            state.userobj=action.payload
            state.isloading=false
            state.issuccess=true
            state.iserror=false
            state.errmsg=''
        },
        [userlogin.rejected]:(state,action)=>{
            state.iserror=true
            state.isloading=false
            state.issuccess=false
            state.errmsg=action.payload.message
        }
    }
})
export const{clearloginstatus}=userSlice.actions
export default userSlice.reducer