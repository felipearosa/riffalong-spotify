import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testcode: 'null'
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
