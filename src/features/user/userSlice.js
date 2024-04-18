import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchedUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSearchedUser: (state, action) => {
      state.searchedUser = action.payload;
    },
  },
});

export const { setSearchedUser } = userSlice.actions;
export default userSlice.reducer;
