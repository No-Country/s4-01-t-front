import { instance } from "../axios/axiosConfig";

export const getData = async (url) => {
  return instance
    .get(url)
    .then(({ data }) => data)
    .catch((err) => console.error(err));
};
