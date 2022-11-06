import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getSongById, songSelector } from "../redux/Slide/SongSlice";
const Playing = () => {
    const dispatch = useDispatch();
    const { song } = useSelector(songSelector);
    const handleClickNext = () => {
        dispatch(getSongById(song.id + 1));
    };
    const handeClickPrevious = () => {
        dispatch(getSongById(song.id - 1));
    };
    const handeEnded = () => {
        dispatch(getSongById(song.id + 1));
    };
    return (
        <div>
            <AudioPlayer
                src={song.url}
                className="player-music"
                layout="stacked-reverse"
                showSkipControls={true}
                showJumpControls={false}
                onClickNext={handleClickNext}
                onClickPrevious={handeClickPrevious}
                onEnded={handeEnded}
            />
        </div>
    );
};

export default Playing;
