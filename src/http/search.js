import axios from "axios";

const BASE_URL =
  "https://www.googleapis.com/customsearch/v1?key=AIzaSyBLmOT1x_5DLAVj6nElNS26kAW1QbCvNmQ&cx=015953220781469061226:qzqi_1frttk";

export const searchQuery = (query, start = 1) => {
  const url = `${BASE_URL}&q=${query}&start=${start}`;
  return axios.get(url).then((res) => res.data);
};
