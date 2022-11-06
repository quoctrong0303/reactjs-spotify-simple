import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongById, songSelector } from "../redux/Slide/SongSlice";

const DetailSong = ({ thumbNail }) => {
    const dispatch = useDispatch();
    const { song } = useSelector(songSelector);

    useEffect(() => {
        dispatch(getSongById(0));
    }, []);
    return (
        <div className="col-span-1 text-center">
            <h2 className="text-cyan-500 font-bold">Now playing</h2>
            <h2 className="text-neutral-400 text-2xl ">{song.name}</h2>
            <div className="w-[240px] m-auto mt-10">
                <img
                    ref={thumbNail}
                    id="thumb"
                    className="w-[250px] rounded-full h-[250px]"
                    src={song.links.images[0].url}
                    alt="avatar"
                />
                <p className="text-center text-2xl text-white">{song.author}</p>
            </div>
        </div>
    );
};

export default DetailSong;
