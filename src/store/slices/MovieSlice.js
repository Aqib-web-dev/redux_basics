import { createSlice } from '@reduxjs/toolkit';

const MoviesSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    addMovie (state, action) {
      state.push(action.payload);
    },
    removeMovie (state, action) {
      const index = state.indexOf(action.payload);
      if (index !== -1) {
      state.splice(index, 1);
      }
    },
  }
})

export const MovieReducer = MoviesSlice.reducer;
export const {addMovie, removeMovie} = MoviesSlice.actions; 