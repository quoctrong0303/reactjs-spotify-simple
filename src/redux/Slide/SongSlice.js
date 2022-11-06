import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/songs.json";
export const SongSlice = createSlice({
    name: "song",
    initialState: {
        song: {
            name: "",
            author: "",
            url: "",
            id: null,
            links: {
                images: [
                    {
                        url: "",
                    },
                    {
                        url: "",
                    },
                ],
            },
        },
    },
    reducers: {
        //Gán lại state song là song đang phát
        getSongById: (state, action) => {
            if (data.find((song) => song.id === action.payload)) {
                state.song = data.find((song) => song.id === action.payload);
            } else {
                state.song = data[0];
            }
        },
    },
});

export const { getSongById } = SongSlice.actions;
export const songSelector = (state) => state.song;
