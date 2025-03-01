import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for user data
const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: null,
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

// Export actions
export const { setUserId } = userSlice.actions;

// Create the store
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
