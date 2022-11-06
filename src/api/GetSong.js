import { getHash256, getHmac512 } from "../utils/encrypt";
const URL_API = "https://zingmp3.vn";
const API_KEY = "88265e23d4284f25963e6eedac8fbfa3";
const SECRET_KEY = "2aa2d1c561e809b267f3638c4a307aab";
const axios = require("axios").default;
let ctime = null;
//Lấy api từ zing mp3
const getSong = async (id) => {
    ctime = Math.floor(Date.now() / 1000);
    let res = await axios.get(
        URL_API +
            `/api/v2/song/get/streaming?id=ZW9CWE6C&ctime=${ctime}&sig=${hashParam(
                "/api/v2/song/get/streaming",
                `id=ZW9CWE6C`,
                0
            )}&apiKey=${API_KEY}`
    );
    let result = await res.json();
};

const getSong2 = async (id) => {
    let res = await fetch(
        "https://server-tau-six.vercel.app/api/song?id=" + id
    );
    let result = await res.json();
    console.log(result.data[128]);
};

const hashParam = (path, param = "", haveParam = 0) => {
    // this.time = '1634406003';
    const hash256 = getHash256(`ctime=${ctime}id=ZW9CWE6C`);
    return getHmac512(path + hash256, SECRET_KEY);
};

export { getSong, getSong2 };
