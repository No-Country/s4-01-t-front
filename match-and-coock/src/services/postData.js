import axios from "axios";

export const postData = (url, data) => {
  return axios
    .post(url, data)
    .then(({ status, data }) => {
      return { data, status };
    })
    .catch((err) => {
      console.error(err);
    });
};
