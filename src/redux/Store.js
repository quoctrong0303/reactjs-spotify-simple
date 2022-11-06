import { configureStore } from "@reduxjs/toolkit";
import { SongSlice } from "./Slide/SongSlice";
import { SongsSlice } from "./Slide/SongsSlice";

export const Store = configureStore({
    reducer: {
        songs: SongsSlice.reducer,
        song: SongSlice.reducer,
    },
});
