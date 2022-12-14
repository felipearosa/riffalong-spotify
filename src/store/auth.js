import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  accessToken: null,
  refreshToken: null,
  expiresIn: null,
  code: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logUserIn(state, action) {
      axios.post("http://localhost:3001/login/", {
        code: action.payload.code,
      }).then(res => {
        state.accessToken(res.data.accessToken);
        state.refreshToken(res.data.refreshToken);
        state.expiresIn(res.data.expiresIn);
        window.history.pushState({}, null, "/");
      }).catch((err) => {
        console.log(err)
        window.location = '/'
      })
    },

    refreshUserIn(state, action){
      axios.post("http://localhost:3001/refresh", {
        refreshToken: action.payload.refreshToken,
      }).then(res => {
        state.accessToken(res.data.accessToken);
        state.expiresIn(res.data.expiresIn);
      }).catch(() => {
        window.location = '/'
      })
    },

    setCode(state, action){
      state.code = action.payload.code
    }
  }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;
