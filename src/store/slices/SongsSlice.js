import { createSlice } from '@reduxjs/toolkit';

const SongsSlice = createSlice({
  name: 'songs',
  initialState: [],
  reducers: {
    addSong (state, action) {
      state.push(action.payload);
    },
    removeSong (state, action) {
      const index = state.indexOf(action.payload);
      if(index !== -1) {
        state.splice(index, 1);
      }
    }
  }
});

export const songsReducer = SongsSlice.reducer;
export const {addSong, removeSong } = SongsSlice.actions;