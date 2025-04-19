import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      // console.log("User Details:", action.payload);
      state.user = action.payload; // Update state with the payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUserDetails } = userSlice.actions

export default userSlice.reducer
