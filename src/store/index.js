import { configureStore } from "@reduxjs/toolkit";
import { MovieReducer, addMovie, removeMovie } from "./slices/MovieSlice";
import { songsReducer, addSong, removeSong } from "./slices/SongsSlice";

const store = configureStore({
  reducer: {
    movies: MovieReducer,
    songs: songsReducer
  }
});

export { store, addMovie, removeMovie, addSong, removeSong}