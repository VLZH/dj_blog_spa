import axios from "axios";

export const custom_axios = axios.create({
  baseURL: "http://localhost:8000",
});

export default custom_axios;
