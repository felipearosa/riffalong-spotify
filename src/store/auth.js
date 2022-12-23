import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let accessToken = localStorage.getItem('accessToken');

console.log('test')

const initialState = {
  accessToken,
  refreshToken: null,
  expiresIn: null,
  code: null,
  isLoggedIn: !!accessToken
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCode(state, action){
      state.code = action.payload.code
    },
    setAccessToken(state, action){
      state.accessToken = action.payload.accessToken
    },
    setExpiresIn(state, action){
      state.expiresIn = action.payload.expiresIn
    },
    setRefreshToken(state, action){
      state.refreshToken = action.payload.refreshToken
    },
    setIsLoggedIn(state, action){
      state.isLoggedIn = action.payload.isLoggedIn
    }
  }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;
