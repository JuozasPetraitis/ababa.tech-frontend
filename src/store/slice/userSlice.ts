import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

export interface Movie {
  title: string;
  date: string;
  imdbLink: string;
  thumbnail: string;
  storyline: string;
}

export interface User {
  username: string;
  email: string;
  password: string;
  movies: Movie[];
}

const initialState = {} as User;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, { payload }: PayloadAction<User>) => payload,
    addMovie: (state, { payload }: PayloadAction<Movie>) => {
      return { ...state, movies: [...state.movies, payload] };
    },
  },
});

export const { getUser, addMovie } = userSlice.actions;
export default userSlice.reducer;
export const userState = (state: RootState) => state.user;
