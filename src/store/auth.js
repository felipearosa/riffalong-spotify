import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  accessToken: null,
  refreshToken: null,
  expireDate: null,
  isLoggedIn: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
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
