import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import useAuth from "../hooks/useAuth";


let accessToken = localStorage.getItem('accessToken');
let expirationDate = localStorage.getItem('expirationDate') * 1;
let expiresInSec = (expirationDate - Date.now()) / 1000

console.log(expiresInSec);

if (expiresInSec < 0) {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('expirationDate')
} else if (expiresInSec < 1800  ) {
  console.log('needs to refresh')
}

const initialState = {
  accessToken,
  refreshToken: null,
  expireDate: null,
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
    setExpireDate(state, action){
      state.expireDate = action.payload.expireDate
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
