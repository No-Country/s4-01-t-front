import axios from "axios";

export const putData = (url, data) => {
  return axios
    .put(url, data)
    .then(({ data }) => data)
    .catch((err) => console.error(err));
};
