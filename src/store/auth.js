import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  refreshToken: null,
  expiresIn: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    testFunc(state, action){
      state.testcode = 'some new name'
    }
  }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;
