import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongById, songSelector } from "../redux/Slide/SongSlice";
import { getListSong, songsSelector } from "../redux/Slide/SongsSlice";
const ListSongs = () => {
    const songActive = useRef();
    //Lấy danh sách song
    const { songs } = useSelector(songsSelector);
    //Lấy song hiện tại
    const { song } = useSelector(songSelector);
    //đổi biến tránh trùng tên
    const songCurr = song;
    //khởi tạo các hành động
    const dispatch = useDispatch();
    const handlePlaySong = (idSong) => {
        dispatch(getSongById(idSong));
    };
    useEffect(() => {
        dispatch(getListSong());
    }, []);

    useEffect(() => {
        //Hiệu ứng hiện song row dang phat ra màn hình
        if (songActive.current != null) {
            songActive.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        }
    }, [song]);

    return (
        <div className="col-span-2 overflow-y-auto">
            <table className="table-auto w-full">
                <thead className="text-white h-12">
                    <tr>
                        <th className="w-[10%]">#</th>
                        <th className="text-left">Title</th>
                        <th className="w-[10%]">Author</th>
                        <th className="w-[10%]">
                            <i className="fa fa-download"></i>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song, index) => {
                        return (
                            <tr
                                ref={
                                    song.id === songCurr.id ? songActive : null
                                }
                                onClick={() => handlePlaySong(song.id)}
                                key={index}
                                className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 hover:text-teal-300 ${
                                    songCurr.id == song.id &&
                                    "text-teal-300 bg-slate-600"
                                }`}
                            >
                                <td className="text-center">{index + 1}</td>
                                <td className="">{song.name}</td>
                                <td className="text-center">{song.author}</td>
                                <td className="text-center">
                                    <a href="{song.url}">
                                        <i className="fa fa-download"></i>
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ListSongs;
