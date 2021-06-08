import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/user/userSlice'
import tracksSlice from '../features/tracks/tracksSlice'
import searchSlice from '../features/search/searchSlice'
export const store = configureStore({
  reducer: {

    user: userSlice,
    tracks: tracksSlice,
    search: searchSlice,
  },
});
