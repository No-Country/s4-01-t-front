import axios from "axios";

export const instance = axios.create({
  baseURL: "https://6332b1c4a54a0e83d2563667.mockapi.io/",
  headers: { "X-Custom-Header": "foobar" },
});
